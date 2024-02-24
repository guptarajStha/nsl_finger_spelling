import React from "react";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-[#0b1d37] text-white">
      <hr className="h-1 bg-[#DCDCDC]" />
      <div className="w-full h-[40px] flex justify-center items-center flex-col p-10">
        <div className="flex justify-center items-center ">
          <FaRegCopyright /> 2024 All Rights Reserved
        </div>
        <h1>
          Created by Guptaraj Shrestha, Nishan Thing, Prajita Dhakal and
          Prasanga Dahal
        </h1>
      </div>
      {/* <hr className="h-1 bg-[#DCDCDC]" /> */}
    </div>
  );
};

export default Footer;
