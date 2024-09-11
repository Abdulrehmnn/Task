import React from "react";
import LOGO from "../assets/Logo.png";

const Logo = () => {
  return (
    <div>
      <div className="bg-[#090916] h-[102px] flex items-center justify-center">
        <div className="absolute top-[57px] left-1/2 transform -translate-x-1/2 z-10">
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
    </div>
  );
};

export default Logo;
