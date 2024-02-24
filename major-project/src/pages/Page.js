import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Test from "./Test";
import Resources from "./Resources";
// import AboutUs from "./AboutUs";
import Home from "./Home";
import { mContext } from "../MainContext";


const Pages = () => {
  const {pages,setPages} =useContext(mContext)
  const location = useLocation();
  useEffect(()=>{
    if (location.pathname=='/'){
      setPages(0)
    }
    if (location.pathname=='/test/'){
      setPages(1)
    }
    if (location.pathname=='/resources/'){
      setPages(2)
    }
  },[location.pathname])
  console.log(pages)
  return (
    <div className="w-full h-full">
      <Routes Location={location.pathname} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/test/" element={<Test />} />
        <Route path="/resources" element={<Resources />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}

      </Routes>
    </div>
  );
};

export default Pages;
