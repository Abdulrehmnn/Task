import React from "react";
import LOGO from "../assets/Logo.png";

const Nav = () => {
  return (
    <>
      <div className="bg-[#090916] h-[102px] flex items-center justify-center ">
        <div className="h-[102px] top-[57px] absolute">
          <img
            src={LOGO}
            alt="Aura Home Stores Logo"
            className="w-[80px] h-[83px] rounded-full"
          />
        </div>
      </div>
      <div className="mt-[60px]">
        <h1 className="font-poppins text-[#1A1A36] font-custom-800 text-[16px]">
          AURA HOME STORES
        </h1>
      </div>
    </>
  );
};

export default Nav;
