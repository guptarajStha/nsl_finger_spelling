import React from "react";
import Intro from "../components/Intro";
import TestComp from "../components/TestComp";
import bg_image from "../images/bg1.png";
import ContactUs from "../components/ContactUs";
import { FaRegCopyright } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // <div className="h-full w-full overflow-x-clip overflow-y-scroll no-scrollbar">
    <div className="h-full w-full overflow-y-scroll no-scrollbar">
      <div
        className="w-[100vw] h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[100vh]  bg-cover justify-center  flex"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <Intro />
      </div>
      <TestComp />
      <ContactUs />
      <div className="mt-[30px]">
        <Footer />
      </div>
      {/* <hr className="h-1 bg-[#DCDCDC] mt-[60px]" />
      <div className="w-full h-[40px] flex justify-center items-center">
      <FaRegCopyright /> 2024 All Rights Reserved
      </div>
      <hr className="h-1 bg-[#DCDCDC]" /> */}
    </div>
  );
};

export default Home;
