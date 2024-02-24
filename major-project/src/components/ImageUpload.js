import React,{useContext} from "react";
import { mContext } from "../MainContext";


const ImageUpload = () => {
    const {imageFile,setImageFile,setPreviewImageCheck, setPreviewImage, setLetterPred} = useContext(mContext)
    const handleImageFile=(event)=>{
        event.preventDefault();
        setPreviewImage(URL.createObjectURL(event.target.files[0]))
        setImageFile(event.target.files[0])
        setPreviewImageCheck(1)
      }
      const handleSubmit=()=>{
        console.log(imageFile)
        console.log(imageFile.name)
    
        var formdata = new FormData();
        formdata.append("img", imageFile,imageFile.name);
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/predict-letter-only/", requestOptions)
          .then(response => response.text())
          .then(result => 
            {
              const data = JSON.parse(result) 
              setLetterPred(data.letter)
            }
            )
          .catch(error => console.log('error', error));
      }
      // const previewImage=(value)=>{
      //   if (imageFile){

      //       setPreviewImageCheck(value)
      //   }
      // }
  return (
    <div className=" w-[100%] flex justify-center flex-col items-center">
      <input
      
        type="file"
        name="image"
        accept="image/*"
        className="text-white ml-[40px] w-[75%] "
        onChange={handleImageFile}
      />
      <button
        className="w-[50%] bg-gray-400 mt-4 h-[30px] rounded-lg "
        onClick={() => handleSubmit()}
      >
        Predict
      </button>
    </div>
  );
};

export default ImageUpload;
