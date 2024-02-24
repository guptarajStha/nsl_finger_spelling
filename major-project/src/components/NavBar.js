import React from 'react';

const NavBar = () => {
  return (
    <div  className='max-w-[1520px] m-auto py-4  flex justify-between h-[8vh] bg-gray-500 pl-10'>
      <div className=' '>
        <h1>LOGO</h1>
      </div>
      <div className='flex h-full justify-end w-[50%]'>
        <ul className='flex h-full justify-center items-center '>
            <li className='bg-white text-center p-4 py-5'>Home</li>
            <li className='bg-white p-4 py-5'>Description</li>
            <li className='bg-white p-4 py-5'>Test</li>
            <li className='bg-white p-4 pr-20 py-5'>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
