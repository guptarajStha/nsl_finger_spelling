import React, { useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import Footer from "../components/Footer";

const Resources = () => {
  // const [play, setPlay] = useState(false);
  return (
    <div className="h-full w-[100vw] overflow-x-clip overflow-y-scroll no-scrollbar">
      <div className="w-full h-[50%] flex mt-20">
        <div className="w-[50%] h-full px-52  flex flex-col justify-center">
          <h1 className="text-[#181F44] font-bold text-2xl">RESOURCES 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            mollitia tempora ipsam ab facere neque veniam totam voluptatibus,
            culpa, dolorem nam. Pariatur, alias impedit unde rem similique
            adipisci fugiat animi.
          </p>
        </div>
        <div className="w-[50%] h-full -ml-4 justify-center flex items-center flex-col hover:scale-150 transition duration-300">
          <div className="h-[80%] w-[60%] border-black border-8 rounded-lg flex-col ">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/OUs7Y_JCYAU?si=VbOJAvMT2pYeNnCC&amp;start=12"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-[5%] w-[68%] mt-[1px] rounded-b-full bg-black shadow-lg shadow-slate-500 "></div>
        </div>
      </div>
      <div className="w-full h-[50%] flex mt-20">
        <div className="w-[50%] h-full ml-4 justify-center flex items-center flex-col hover:scale-150 transition duration-300">
          <div className="h-[80%] w-[60%] border-black border-8 rounded-lg flex-col ">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/uHfqub98Q_I?si=xDEaIjBuzPV8Mu7A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-[5%] w-[68%] mt-[1px] rounded-b-full bg-black shadow-lg shadow-slate-500 "></div>
        </div>
        <div className="w-[50%] h-full px-52  flex flex-col justify-center">
          <h1 className="text-[#181F44] font-bold text-2xl">RESOURCES 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            mollitia tempora ipsam ab facere neque veniam totam voluptatibus,
            culpa, dolorem nam. Pariatur, alias impedit unde rem similique
            adipisci fugiat animi.
          </p>
        </div>
      </div>
      <div className="w-full h-[50%] flex mt-20">
        <div className="w-[50%] h-full px-52  flex flex-col justify-center">
          <h1 className="text-[#181F44] font-bold text-2xl">RESOURCES 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            mollitia tempora ipsam ab facere neque veniam totam voluptatibus,
            culpa, dolorem nam. Pariatur, alias impedit unde rem similique
            adipisci fugiat animi.
          </p>
        </div>
        <div className="w-[50%] h-full -ml-4 justify-center flex items-center flex-col hover:scale-150 transition duration-300">
          <div className="h-[80%] w-[60%] border-black border-8 rounded-lg flex-col ">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/C1gSZ42UdY4?si=X7Cph5ipOxyxjFuW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-[5%] w-[68%] mt-[1px] rounded-b-full bg-black shadow-lg shadow-slate-500 "></div>
        </div>
      </div>
      <div className="w-full h-[50%] flex mt-20">
        <div className="w-[50%] h-full ml-4 justify-center flex items-center flex-col hover:scale-150 transition duration-300">
          <div className="h-[80%] w-[60%] border-black border-8 rounded-lg flex-col ">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/doDUihpj6ro?si=gkXqoUWStFX0EfWb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="h-[5%] w-[68%] mt-[1px] rounded-b-full bg-black shadow-lg shadow-slate-500 "></div>
        </div>
        <div className="w-[50%] h-full px-52  flex flex-col justify-center">
          <h1 className="text-[#181F44] font-bold text-2xl">RESOURCES 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            mollitia tempora ipsam ab facere neque veniam totam voluptatibus,
            culpa, dolorem nam. Pariatur, alias impedit unde rem similique
            adipisci fugiat animi.
          </p>
        </div>
      </div>
      <div className="mt-[50px]">
        <Footer />
      </div>
      {/* <hr className="h-1 bg-[#DCDCDC] mt-[60px]" />
      <div className="w-full h-[40px] flex justify-center items-center ">
        <FaRegCopyright /> 2024 All Rights Reserved
      </div>
      <hr className="h-1 bg-[#DCDCDC]" /> */}
    </div>
  );
};

export default Resources;
