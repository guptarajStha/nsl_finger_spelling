import React, { useState, useContext } from "react";
// import Webcam from 'react-webcam'
import background_img from "../images/bg1.png";
import { mContext } from "../MainContext";
import ImageUpload from "../components/ImageUpload";
import VideoUpload from "../components/VideoUpload";
import DisplayArea from "../components/DisplayArea";

import Footer from "../components/Footer";

const Test = () => {
  const type = ["TEST", "LIVE TEST", "VIDEO TEST", "IMAGE TEST"];
  const [audioPlay, setAudioPlay] = useState(null);
  const {
    testType,
    setTestType,
    liveTestType,
    setLiveTestType,
    letterPred,
    startStop,
    setStartStop,
    wordFormation,
    setWordFormation,
    tempWord,
    setTempWord,
    confirmButton,
    setConfirmButton,
  } = useContext(mContext);
  const [giveSign, setGiveSign] = useState(5);
  const [wait, setWait] = useState(5);
  const [isWaiting, setIsWaiting] = useState(true);

  const handleStartStop = () => {
    setConfirmButton(false);
    setTempWord([]);
    setWordFormation(null);
    setStartStop(!startStop);
    setGiveSign(5);
    setWait(5);
    if (startStop) {
      setIsWaiting(false);
    } else {
      setIsWaiting(true);
    }
  };

  const selectTypeOfTest = (value) => {
    setTestType(value);
  };
  // console.log(imageFile);
  const handleConfirm = () => {
    setStartStop(false);
    // console.log(tempWord);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(tempWord);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/word-formation/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        // console.log(data.word)
        setWordFormation(data.word);
        // console.log(wordFormation);
      })
      .catch((error) => console.error(error));
    if (wordFormation != null) {
      setConfirmButton(true);
      const formdata = new FormData();
      formdata.append("text", wordFormation);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/text-to-speech/", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result)
          setAudioPlay(data.mp3_base64)
        // console.log(audioPlay)
        })
        .catch((error) => console.error(error));
    }
  };
  const handlePlay = () => {
    const audio = new Audio(`data:audio/mp3;base64,${audioPlay}`);
    audio.play();
    // console.log(audio)
  };

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-scroll no-scrollbar">
      <div
        className="w-[100vw] h-full bg-cover flex flex-col justify-center items-center overflow-x-hidden"
        style={{ backgroundImage: `url(${background_img})` }}
      >
        <div className=" flex flex-col justify-center items-center ">
          <h1 className="text-white text-bold text-[40px]">{type[testType]}</h1>
          <div className="w-[70vw]  flex h-[70vh] rounded-lg  justify-center">
            {/* 1st camera div */}
            <div className=" w-[60%] flex justify-between flex-col bg-[#787878] opacity-80 rounded-lg">
              <div className=" h-[80%] flex justify-center items-center p-8">
                <DisplayArea
                  wait={wait}
                  setWait={setWait}
                  giveSign={giveSign}
                  setGiveSign={setGiveSign}
                  isWaiting={isWaiting}
                  setIsWaiting={setIsWaiting}
                />
              </div>
              {/* <div className="bg-[#C3D3E5] h-[10%] flex  pl-10 rounded-lg  flex-col justify-start "> */}
              <div className="flex justify-center w -full h-[10%] items-center p-1">
                {testType == 3 || liveTestType == 1 ? (
                  <>
                    <div className="bg-[#C3D3E5] w-full h-[90%] p-2 item-center font-bold ">
                      Predicted Output: {letterPred}
                    </div>
                  </>
                ) : (
                  <>
                    {liveTestType === 0 ? (
                      <>
                        {testType == 1 &&
                        liveTestType == 0 &&
                        confirmButton === false ? (
                          <>
                            <div className="bg-[#C3D3E5] w-[45%] h-[90%] p-2 item-center font-bold border-r-4 border-black">
                              Predicted Output: {letterPred}
                            </div>
                            <div className="bg-[#C3D3E5] w-[55%] h-[90%] p-2 item-center font-bold">
                              Predicted Letter: {tempWord}
                            </div>
                          </>
                        ) : (
                          <>
                            {testType == 1 &&
                            liveTestType == 0 &&
                            confirmButton == true ? (
                              <>
                                {" "}
                                <div className="bg-[#C3D3E5] w-[50%] h-[90%] p-2 item-center font-bold border-r-4  border-black">
                                  Predicted Letter: {tempWord}
                                </div>
                                <div className="bg-[#C3D3E5] w-[50%] h-[90%] p-2 item-center font-bold ">
                                  Predicted Word: {wordFormation}
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )}
                {/* {liveTestType === 0 ? <>
                {confirmButton === false ? (
                <>
                  <div className="bg-[#C3D3E5] w-[45%] h-[90%] p-2 item-center font-bold border-r-4 border-black">
                    Predicted Output: {letterPred}
                  </div>
                  <div className="bg-[#C3D3E5] w-[55%] h-[90%] p-2 item-center font-bold">
                    Predicted Letter: {tempWord}
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#C3D3E5] w-[50%] h-[90%] p-2 item-center font-bold border-r-4  border-black">
                    Predicted Letter: {tempWord}
                  </div>
                  <div className="bg-[#C3D3E5] w-[50%] h-[90%] p-2 item-center font-bold ">
                    Predicted Word: {wordFormation}
                  </div>
                </>
              )}
              </> : <></>} */}

                {/* <h1>Predicted Output: {letterPred}</h1>
              <h1>Predicted Letter: {tempWord}</h1>
              <h1 className="text-white">Predicted Word: {wordFormation}</h1> */}
              </div>
            </div>
            {/* button div */}
            <div className="w-[30%] bg-[#333333] flex flex-col justify-between rounded-lg">
              <div className="flex flex-col items-center justify-center gap-4 p-2 mt-6">
                {testType === 1 ? (
                  <>
                    <div className="w-full flex gap-x-2">
                      <button
                        className={`w-[50%] border-white border-b-4 ${
                          liveTestType === 0
                            ? "bg-[#5a5a5a] text-white text-[13px] font-bold text-"
                            : " text-white text-[10px]  hover:bg-[#5a5a5a]"
                        }  p-2 rounded-lg  mb-4 mt-4`}
                        onClick={() => setLiveTestType(0)}
                      >
                        Finger Spelling
                      </button>
                      {/* <button className="text-white border-b-4">Finger Spelling</button> */}
                      <button
                        className={`w-[50%]  border-white border-b-4 ${
                          liveTestType === 1
                            ? "bg-[#5a5a5a] text-white text-[13px] font-bold text-"
                            : " text-white text-[10px]  hover:bg-[#5a5a5a]"
                        }  p-2 rounded-lg  mb-4 mt-4`}
                        onClick={() => setLiveTestType(1)}
                      >
                        Letter Recognization
                      </button>
                    </div>
                    {liveTestType == 0 ? (
                      <>
                        <button
                          className="w-[80%] border-2 border-white text-white hover:bg-[#5a5a5a] text-[16px] p-2 rounded-lg"
                          onClick={handleStartStop}
                        >
                          {startStop ? "Stop" : "Start"}
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                    {liveTestType == 0 ? (
                      <>
                        <button
                          className="w-[80%] border-2 border-white text-white hover:bg-[#5a5a5a] text-[16px] p-2 rounded-lg"
                          onClick={handleConfirm}
                        >
                          Confirm Word
                        </button>
                        {confirmButton ? (
                          <>
                            <button
                              className="w-[80%] border-2 border-white text-white hover:bg-[#5a5a5a] text-[16px] p-2 rounded-lg"
                              onClick={handlePlay}
                            >
                              Play Word
                            </button>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    {testType === 2 ? (
                      <>
                        <VideoUpload />
                      </>
                    ) : (
                      <>
                        {testType === 3 ? (
                          <>
                            <ImageUpload />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="flex flex-col  justify-end items-center my-4">
                <button
                  className={`w-[80%] border-2 ${
                    testType === 1
                      ? "bg-white text-[#5a5a5a]"
                      : "border-white text-white hover:bg-[#5a5a5a]"
                  }  text-[16px] p-2 rounded-lg  mb-4`}
                  onClick={() => selectTypeOfTest(1)}
                >
                  Live Test
                </button>
                {/* <button
                className={`w-[80%] border-2 ${
                  testType === 2
                    ? "bg-white text-[#5a5a5a]"
                    : "border-white text-white hover:bg-[#5a5a5a]"
                }  text-[16px] p-2 rounded-lg  mb-4`}
                onClick={() => selectTypeOfTest(2)}
              >
                Video Test
              </button> */}
                <button
                  className={`w-[80%] border-2 ${
                    testType === 3
                      ? "bg-white text-[#5a5a5a]"
                      : "border-white text-white hover:bg-[#5a5a5a]"
                  }  text-[16px] p-2 rounded-lg  mb-4`}
                  onClick={() => selectTypeOfTest(3)}
                >
                  Image Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="h-1 bg-white mt-[60px]" />
      <div className="w-full h-[40px] flex justify-center items-center text-white">
      <FaRegCopyright /> 2024 All Rights Reserved
      </div> */}
      </div>
      <Footer />
      {/* <div className="w-full bg-[#0b1d37] text-white">
      <hr className="h-1 bg-[#DCDCDC]" />
      <div className="w-full h-[40px] flex justify-center items-center">
      <FaRegCopyright /> 2024 All Rights Reserved
      </div>
      <hr className="h-1 bg-[#DCDCDC]" />
      </div> */}
    </div>
  );
};

export default Test;
