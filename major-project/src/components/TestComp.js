import React, { useEffect } from "react";
import laptop from "../images/gif.gif";
import { useNavigate } from "react-router-dom";
import finger from "../images/finger.gif";
import icon from "../images/icon.gif";
import live from "../images/livee.gif";
import capture from "../images/capturee.gif";

const TestComp = () => {
  const navigate = useNavigate();
  const navigateToResource = () => {
    navigate("/resources/");
  };
  return (
    <>
      <div className="w-full overflow-hidden ">
        <div className="w-full flex flex-row justify-center xl:p-20">
          <div className="pl-8 xl:pl-20 w-[50vw] mt-10">
            <h1 className="text-[#181F44] text-[30px] lg:text-[40px] xl:text-[48px] font-bold">
              Nepali Sign Language is fun to learn
            </h1>
            <h4 className="text-[#181F44] text-[20px] lg:text-[24px] xl:text-[28px] mt-4 mb-4">
              Click in the link to get free resources and dive into the world of
              signs
            </h4>
            <button
              className="w-[50%] h-[20%] md:px-[34px] md:py-[17px] bg-[#181F44] rounded-md text-white text-[20px] lg:text-[24px] xl:text-[28px] hover:bg-[#303a77]"
              // className="w-[263px] h-[68px] px-[34px] py-[17px] bg-[#181F44] rounded-md text-white text-[28px] hover:bg-[#303a77]"
              onClick={navigateToResource}
            >
              GET STARTED
            </button>
          </div>
          <div className="w-[552px] h-[297px] mt-[55px]">
            <img src={laptop} alt="laptop" />
          </div>
        </div>
      </div>

      <div className="text-[#181F44] flex flex-col w-full items-center p-4 mt-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[48px]">TYPES OF TEST</h1>
          <h4 className="font-medium text-[20px] tracking-wider mt-3 mb-6">
            Tests that are suitable for all the situation
          </h4>
        </div>
        {/* LIVE TEST */}
        <div className="flex w-[80vw]  justify-between mt-20">
          <div className="  items-center w-[50%]">
            <div className="bg-[#181F44] w-[255px] h-[255px] rounded-full ml-10">
              <img src={live} alt="" />
            </div>
          </div>
          <div className="flex flex-col  text-center items-center justify-center ml-36">
            <h1 className="font-bold text-[44px]">LIVE TEST</h1>
            <h3 className=" font-medium text-[32px]">
              Detection Of NSL with the help of Live & Real inputs.
            </h3>
          </div>
        </div>
        {/* Image test */}
        <div className="flex w-[80vw]  justify-between mt-20">
          <div className="flex flex-col  text-center items-center justify-center ">
            <h1 className="font-bold text-[44px]">CAPTURED IMAGE TEST</h1>
            <h3 className=" font-medium text-[32px]">
              Detection Of NSL with the help of Captured image inputs.
            </h3>
          </div>
          <div className="  items-center w-[50%]">
            <div className="bg-[#181F44] w-[255px] h-[255px] rounded-full ml-28">
              <img src={capture} alt="" />
            </div>
          </div>
        </div>

        {/* Image test */}
        {/* <div className="flex w-[80vw]  justify-between mt-20">
          <div className="  items-center w-[50%]"><div className="bg-[#181F44] w-[255px] h-[255px] rounded-full ml-10"></div></div>
          <div className="flex flex-col  text-center items-center justify-center ml-36">
            <h1 className="font-bold text-[44px]">CAPTURED IMAGE TEST</h1>
            <h3 className=" font-medium text-[32px]">Detection Of NSL with the help of Captured image inputs.</h3>
          </div>
        </div> */}

        {/* FINGER SPELLING */}
        <div className="w-[100vw] h-[595px] bg-[#F4F4F4] mt-8 text-[#181F44] flex justify-center items-center">
          <div className="w-[80vw] flex justify-center items-center flex-col text-center">
            <h1 className="font-bold text-[64px]">LIVE FINGER SPELLING TEST</h1>
            <h3 className="text-[32px] font-medium mt-4 w-[50vw] mb-10">
              Detection of NSL with the help of Live & Real inputs and further
              composed to form a new words.
            </h3>
            <div className="bg-[#181F44] w-[255px] h-[255px] rounded-full">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComp;
