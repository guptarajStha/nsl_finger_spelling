import React, { useState, createContext } from "react";
import App from "./App";
export const mContext = createContext();

const MainContext = () => {
  const [letterPred, setLetterPred] = useState(null);
  const [testType, setTestType] = useState(0);
  const [liveTestType, setLiveTestType] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageCheck, setPreviewImageCheck] = useState(0);
  const [videoFile, setVideoFile] = useState();
  const [previewVideoCheck, setPreviewVideoCheck] = useState(0);
  const [startStop,setStartStop] = useState(false)

  const [tempWord,setTempWord] = useState([])
  const [wordFormation,setWordFormation] = useState(null)

  const [accuracy, setAccuracy] = useState(50);
  const [tempLetter,setTempLetter] = useState()

  const [confirmButton,setConfirmButton] = useState(false)

  const [pages,setPages] = useState(0)

  
  return (
    <div>
      <mContext.Provider
        value={{ testType, setTestType, liveTestType, setLiveTestType,imageFile, setImageFile,previewImageCheck, setPreviewImageCheck,videoFile, setVideoFile,previewVideoCheck, setPreviewVideoCheck,previewImage, setPreviewImage,letterPred, setLetterPred,startStop,setStartStop,wordFormation,setWordFormation,tempWord,setTempWord,accuracy, setAccuracy,tempLetter,setTempLetter,confirmButton,setConfirmButton,pages,setPages }}
      >
        <App />
      </mContext.Provider>
    </div>
  );
};

export default MainContext;
