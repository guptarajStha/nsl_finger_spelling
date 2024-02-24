import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import guptraj from "../images/guptaraj.png";
import nishan from "../images/nishan.png";
import prasanga from "../images/prasanga.png";
import prajita from "../images/prajitaa.png";
import pukarsir from "../images/pukarsirr.png";

import "aos/dist/aos.css";
import AOS from "aos";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "center-bottom",
      duration: "3000",
      delay: "300",
    });
  }, []);
  return (
    <div className="w-full mb-4 mt-6">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-[64px] text-[#181F44]">Contact Us</h1>
      </div>
      <div className="flex w-full justify-center items-center -mt-[12rem]">
        <div className="flex jusctify-center w-full mt-10">
          <div className="w-[35%] flex justify-center items-center ">
            <div className="w-[400px] h-[450px]  border-[#DCDCDC] border-4 hover:scale-110 transition duration-300">
              <div className="hover:scale-110 transition duration-300 h-[70%] flex justify-center items-center">
                <img className="w-[60%] " src={guptraj} />
              </div>
              <div className="font-bold text-xl items-center flex justify-center mt-4 hover:scale-125 transition duration-300">
                GUPTARAJ SHRESTHA
              </div>
              <div className="flex justify-center items-center gap-10 mt-4">
                <a
                  href="https://www.facebook.com/guptarajshrestha/"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href="https://np.linkedin.com/in/shrestha-guptaraaz-a813481a6"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <CiLinkedin className="text-white" size={20} />
                </a>
                <a
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                  href="mailto:shresthaguptaraj@gmail.com"
                >
                  <CiMail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex justify-center items-center mt-[400px]">
            <div className="w-[400px] h-[490px]  border-[#DCDCDC] border-4 hover:scale-110 transition duration-300">
              <div className="hover:scale-110 transition duration-300 h-[70%] flex justify-center items-center">
                <img className="w-[60%] " src={pukarsir} />
              </div>
              <div className="font-bold text-xl items-center flex justify-center mt-4 hover:scale-125 transition duration-300 flex-col">
                <h1>PUKAR KARKI</h1>
                <h1 className=" font-thin">Supervisor</h1>
              </div>

              <div className="flex justify-center items-center gap-10 mt-4">
                <a
                  href="https://www.facebook.com/pukarkarkii"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pukarkarki/"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <CiLinkedin className="text-white" size={20} />
                </a>
                <a
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                  href="mailto:pukar@ioepc.edu.np"
                >
                  <CiMail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[35%] flex justify-center items-center ">
            <div className="w-[400px] h-[450px]  border-[#DCDCDC] border-4 hover:scale-110 transition duration-300">
              <div className="hover:scale-110 transition duration-300 h-[70%] flex justify-center items-center">
                <img className="w-[60%] " src={nishan} />
              </div>

              <div className="font-bold text-xl items-center flex justify-center mt-4 hover:scale-125 transition duration-300">
                NISHAN THING
              </div>
              <div className="flex justify-center items-center gap-10 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100041571048210"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href=""
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <CiLinkedin className="text-white" size={20} />
                </a>
                <a
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                  href="mailto:076bct052@ioepc.edu.np"
                >
                  <CiMail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center -mt-24">
        <div className="flex jusctify-center w-full ">
          <div className="w-[35%] flex justify-center items-center">
            <div className="w-[400px] h-[450px]  border-[#DCDCDC] border-4 hover:scale-110 transition duration-300">
              <div className="hover:scale-110 transition duration-300 h-[70%] flex justify-center items-center">
                <img className="w-[60%] " src={prajita} />
              </div>
              <div className="font-bold text-xl items-center flex justify-center mt-4 hover:scale-125 transition duration-300">
                PRAJITA DHAKAL
              </div>
              <div className="flex justify-center items-center gap-10 mt-4">
                <a
                  href="https://www.facebook.com/prajita.dhakal.96"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href=""
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <CiLinkedin className="text-white" size={20} />
                </a>
                <a
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                  href="mailto:076bct057@ioepc.edu.np"
                >
                  <CiMail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[30%]"></div>
          <div className="w-[35%] flex justify-center items-center ">
            <div className="w-[400px] h-[450px]  border-[#DCDCDC] border-4 hover:scale-110 transition duration-300">
              <div className="hover:scale-110 transition duration-300 h-[70%] flex justify-center items-center">
                <img className="w-[80%]" src={prasanga} />
              </div>
              <div className="font-bold text-xl items-center flex justify-center mt-4 hover:scale-125 transition duration-300">
                PRASANGA DAHAL
              </div>
              <div className="flex justify-center items-center gap-10 mt-4">
                <a
                  href="https://www.facebook.com/dahalprasanga.77"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <FaFacebook className="text-white" size={20} />
                </a>
                <a
                  href="https://np.linkedin.com/in/prasanga-dahal-3b604b1bb"
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                >
                  <CiLinkedin className="text-white" size={20} />
                </a>
                <a
                  className="hover:scale-125 transition duration-300 w-[40px] h-[40px] bg-[#181F44] rounded-full justify-center items-center flex cursor-pointer"
                  href="mailto:076bct058@ioepc.edu.np"
                >
                  <CiMail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
