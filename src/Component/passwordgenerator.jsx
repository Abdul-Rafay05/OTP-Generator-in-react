import React, { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [Length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //   ref hook
  const PassRef = useRef(null);

  //   this function has created for generate random password
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefjhijklmnopqrstuvwxyz";
    if (NumberAllowed) {
      str += "0123456789";
    }
    if (CharacterAllowed) {
      str += "!@$%^&*()_+=[]{}~`";
    }
    // console.log(Length);
    for (let i = 1; i <= Length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
      //   console.log(random);
    }
    setPassword(pass);
  }, [Length, NumberAllowed, CharacterAllowed, setPassword]);

  const CopyPasswordToClipboard = useCallback(() => {
    PassRef.current?.select();
    PassRef.current?.setSelectionRange(0, Length);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
    // alert("hello")
  }, [Length, NumberAllowed, CharacterAllowed, PasswordGenerator]);
  return (
    <>
      <div className="container bg-[#E4B1F0] w-full h-screen flex justify-center items-center flex-col">
        <div className="bg-gray-900 shadow-lg w-3/6 rounded-lg px-5 py-10 flex justify-center items-center flex-col">
          <h1 className="text-3xl text-white font-bold uppercase">
            Password Generator
          </h1>
          <div className="text-3xl uppercase mt-10 w-full">
            <div className="show-lg  flex gap-3">
              <input
                className="rounded-lg w-full p-2 border-none outline-none"
                type="text"
                value={Password}
                placeholder="Password"
                readOnly
                ref={PassRef}
              />
              <button
                className="bg-[#156fff] hover:bg-[#004bc3] duration-200 text-white px-2 rounded-lg "
                onClick={CopyPasswordToClipboard}
              >
                Copy
              </button>
            </div>
            <div className="mt-5 flex gap-5 text-white justify-between items-center">
              <div className="rang space-x-3 flex justify-center items-center">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={Length}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label className="capitalize text-2xl">Length: {Length}</label>
              </div>
              <div className="number space-x-3 flex justify-center items-center">
                <input
                  className="w-[20px] h-[20px]"
                  type="checkbox"
                  defaultChecked={NumberAllowed}
                  id="NumberInput"
                  onChange={(prev) => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label className="capitalize text-2xl">Numbers</label>
              </div>
              <div className="character space-x-3 flex justify-center items-center">
                <input
                  className="w-[20px] h-[20px]"
                  type="checkbox"
                  defaultChecked={CharacterAllowed}
                  onChange={() => {
                    setCharacterAllowed((toggle) => !toggle);
                  }}
                />
                <label className="capitalize text-2xl">Character</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
