// import React from 'react';
// import bgimg from '../images/bgimg.png'

// const Intro = () => {
//   return (
    
//     <div className='bg-[#0A1424] w-screen h-screen relative justify-center  flex '>
//       <img src={bgimg} alt="" className='object-cover w-full h-full absolute z-[10]'/>
//       <div className='flex text-white flex-col absolute z-[11] mt-[157px] justify-center items-center'>
//         <h1 className='font-bold text-[50px]'>Nepali Sign Language</h1>
//         <h5 className='text-[25px]'>in such a way everyone understands</h5>
//       </div>
//     </div>
//   );
// }

// export default Intro;

import React from 'react';

const Intro = () => {
  return (
    
    // <div className='bg-[#0A1424] w-full h-full bg-cover justify-center  flex' >
      <div className='flex text-white flex-col justify-center items-center'>
        <h1 className='font-bold text-[40px] md:text-[50px] lg:text-[60px]'>Nepali Sign Language</h1>
        <h5 className='text-[15px] md:text-[20px] lg:text-[25px]'>in such a way everyone understands</h5>
      </div>
    // </div>
  );
}

export default Intro;
