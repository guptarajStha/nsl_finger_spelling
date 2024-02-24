import React, { useRef, useContext, useEffect, useState } from "react";
import { mContext } from "../MainContext";
import Webcam from "react-webcam";
// import axios from 'axios'

const DisplayArea = (props) => {
  const webcamRef = useRef(null);

  const giveSign = props.giveSign;
  const setGiveSign = props.setGiveSign;
  const wait = props.wait;
  const setWait = props.setWait;
  const isWaiting = props.isWaiting;
  const setIsWaiting = props.setIsWaiting;

  // const [giveSign,setGiveSign] = useState(10)
  // const [wait,setWait] = useState(10)
  // const [isWaiting,setIsWaiting] = useState(true)
  
  // const [accuracy, setAccuracy] = useState(50);
  // const [tempLetter,setTempLetter] = useState()
  const {
    testType,
    previewImageCheck,
    videoFile,
    previewVideoCheck,
    previewImage,
    setLetterPred,
    startStop,
    setStartStop,
    liveTestType,wordFormation,setWordFormation,tempWord,setTempWord,
    accuracy, setAccuracy,tempLetter,setTempLetter 
  } = useContext(mContext);
  // const [imageCapture, setImageCapture] = useState();

  const captureAndSendFrame = () => {
    if (webcamRef.current) {
      const frame = webcamRef.current.getScreenshot();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        image: frame,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/predict-letter/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result)
          const acc = parseFloat(data.acc)
          if(testType==1 & liveTestType == 0){
            if (acc>96){
              // setAccuracy(acc)
              if(data.letter!='blank'){
                setTempLetter(data.letter)
              }
            }  
            
          }
          // setAccuracy(parseFloat(data.acc))

            // const data = JSON.parse(result);
            setLetterPred(data.both);
          
        })
        .catch((error) => console.log("error", error));
      
    }
  };
  useEffect(() => {
    if (startStop) {
      const interval = setInterval(() => {
        if (!isWaiting) {
          if (giveSign > 0) {
            setGiveSign((prev) => prev - 1);
            // const intervals = setInterval(captureAndSendFrame, 400);
            // return () => clearInterval(intervals);
          } else {
            setWait(5);
            setIsWaiting(!isWaiting);
            setTempWord(prev=>[...prev,tempLetter])
            setTempLetter()
            setAccuracy(50)
          }
        } else {
          if (wait > 0) {
            setWait((prevCount) => prevCount - 1);
          } else {
            setGiveSign(10);
            setIsWaiting(!isWaiting);
          }
        }
      }, 1000);

      return () => clearInterval(interval);
    }
    // const interval = setInterval(captureAndSendFrame, 400);
    // return () => clearInterval(interval);
  }, [startStop, giveSign, wait, isWaiting]);
  useEffect(()=>{
    if (!isWaiting){
      const interval = setInterval(captureAndSendFrame, 400);
      return () => clearInterval(interval);
    }
  },[isWaiting])
  useEffect(()=>{
    if (liveTestType==1){
      const interval = setInterval(captureAndSendFrame, 400);
      return () => clearInterval(interval);
    }
  },[liveTestType])

  
  return (
    <>
      {testType === 1 ? (
        <div className="flex flex-col w-full h-full items-center">
          <div className=" flex flex-col text-white items-center mt-[-20px]">
            {(liveTestType == 0) & startStop ? (
              <div className="w-[400px] flex justify-center items-center font-Bold h-[40px]">
                {!isWaiting ? (
                  <>GIVE ME 1 SIGN WITHIN {giveSign}sec</>
                ) : (
                  <>WAIT {wait}sec FOR NEXT SIGN</>
                )}
              </div>
            ) : (
              <div className="w-[100px] h-[40px]"></div>
            )}
          </div>
          <div className="w-full h-[100%]">
            <Webcam
              className="w-[1000px] h-[400px]"
              audio={false}
              ref={webcamRef}
              height={400}
              width={1000}
              screenshotFormat="image/jpeg"
            />
          </div>
          {/* <button onClick={capture}>Capture</button> */}
          {/* <img src={imageCapture} alt="webcam" height={400} width={400}/> */}
        </div>
      ) : (
        <>
          {testType === 3 ? (
            <>
              {previewImageCheck === 1 ? (
                <>
                  <img src={previewImage} alt="testImage" className="h-full" />
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              {testType === 2 ? (
                <>
                  {previewVideoCheck === 1 ? (
                    <>
                      <video
                        width={540}
                        height={540}
                        src={videoFile}
                        type="video/mp4"
                      >
                        {/* <source src={videoFile} type="video/mp4" /> */}
                      </video>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default DisplayArea;
