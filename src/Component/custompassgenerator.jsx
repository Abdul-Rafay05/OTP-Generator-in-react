import React, { useState, useCallback, useEffect, useRef } from "react";

function CustomPassGenerator() {
  const [Length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  let GenPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) str += "0123456789";
    if (CharAllowed) str += "~!@#$%^&&*(){}[]?";
    for (let i = 1; i <= Length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
      //   console.log(random);
    }
    setPassword(pass);
  }, [Length, NumberAllowed, CharAllowed, Password]);

  useEffect(() => {
    GenPassword();
  }, [Length, NumberAllowed, CharAllowed, setPassword]);

  //   use ref hook
  let CopyPassNull = useRef(null);

  let CopyPass = useCallback(() => {
    CopyPassNull.current?.select();
    CopyPassNull.current?.setSelectionRange(0, 52);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="container min-w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="CustomPasswordGenerate bg-gray-900 p-5 rounded-lg w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:[60%] 2xl:w-[50%] ">
          <h1 className="text-[20px] font-bold uppercase text-white text-center sm:text-xl md:text-2xl lg:text-3xl">
            Custom Password Generator
          </h1>
          <div className="input w-full flex flex-col justify-between items-center gap-4 my-5 md:flex-row">
            <input
              className="p-2 rounded-lg w-full outline-none text-3xl"
              type="text"
              value={Password}
              placeholder="Password"
              ref={CopyPassNull}
              readOnly
            />
            <button
              onClick={CopyPass}
              className="bg-[blue] text-white p-3 rounded-lg cursor-pointer hover:bg-[#3939f9] text-2xl w-full md:w-[120px]"
            >
              Copy
            </button>
          </div>
          <div className="controls text-white text-2xl flex flex-col justify-between items-start gap-2 sm:flex-col sm:justify-start sm:items-start sm:gap-2  md:flex-row md:justify-between">
            <div className="length space-x-4">
              <input
                type="range"
                min={0}
                max={52}
                value={Length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length is: {Length}</label>
            </div>
            <div className="Number space-x-4">
              <input
                className="w-5 h-5"
                type="checkbox"
                value={NumberAllowed}
                onChange={() => {
                  setNumberAllowed((e) => {
                    // console.log(e);
                    setNumberAllowed(!e);
                  });
                }}
              />
              <label>Number</label>
            </div>
            <div className="Character space-x-4">
              <input
                className="w-5 h-5"
                value={CharAllowed}
                type="checkbox"
                onChange={() => {
                  setCharAllowed((e) => {
                    // console.log(e);
                    setCharAllowed(!e);
                  });
                }}
              />
              <label>Charachter</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomPassGenerator;
