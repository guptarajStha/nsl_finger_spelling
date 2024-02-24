import React,{useContext} from "react";
import { mContext } from "../MainContext";

const VideoUpload = () => {
    const {videoFile,setVideoFile,setPreviewVideoCheck} = useContext(mContext)
    const handleVideoFile=(event)=>{
        event.preventDefault();
        setVideoFile(URL.createObjectURL(event.target.files[0]))
      }
      const previewVideo=(value)=>{
        if (videoFile){

            setPreviewVideoCheck(value)
        }
      }
  return (
    <div className=" w-[100%] flex justify-center flex-col items-center">
      <input
        type="file"
        name="video"
        accept="video/*"
        className="text-white ml-29 w-[90%]"
        onChange={handleVideoFile}
      />
      <button
        className="w-[50%] bg-gray-400 mt-4 h-[30px] rounded-lg "
        onClick={() => previewVideo(1)}
      >
        Preview
      </button>
    </div>
  );
};

export default VideoUpload;
