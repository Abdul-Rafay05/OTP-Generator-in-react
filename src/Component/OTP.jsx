import React, { useState } from "react";

function Otp(props) {
  //   let otp = Math.floor(Math.random * 5);
  const [OTP, setOtp] = useState("00000");
  return (
    <>
      <div className="container flex flex-col justify-center items-center w-full h-screen gap-5 bg-gradient-to-r from-[#7E60BF] to-[#E4B1F0] text-white">
        <h1 className="uppercase text-3xl font-bold">{props.mainHead}</h1>
        <div className="otp_container text-5xl border-solid border-2 border-black tracking-[5px] font-bold px-10 py-5 rounded-lg text-black">
          {OTP}
        </div>
        <button
          className="uppercase bg-[red] rounded p-2 text-white shadow-lg hover:bg-[green] duration-200 cursor-pointer "
          onClick={() => {
            let genOtp = "";
            for (let i = 0; i < 5; i++) {
              genOtp += Math.floor(Math.random() * 9);
            }
            setOtp(genOtp);
          }}
        >
          generat otp
        </button>
      </div>
    </>
  );
}

export default Otp;
