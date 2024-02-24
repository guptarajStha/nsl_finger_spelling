import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { mContext } from "../MainContext";
// import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Nav = () => {
    // const [currentState, setCurrentState] = useState(0);
    const {setTestType,pages} = useContext(mContext)
return(
    <div className=" w-full h-[15%] bg-[#0b1d37]  flex items-center px-10 text-center justify-between ">
      <div className="flex items-center text-center font-bold">
        <p className="text-white">Logo</p>
      </div>
      {/* <div className="cursor-pointer md:hidden" onClick={()=>{setCurrentState(!currentState)}}>
        <AiOutlineMenu size={25} />
      </div> */}
      <div className=" flex text-white/50 text-xl mr-[5vw] gap-10">
        <Link to={"/"} className={`p-3 font-medium   cursor-pointer hover:text-white ${pages ===0?"text-white":""} `}>Home</Link>
        <Link to={'/test/'} className={`p-3 font-medium   cursor-pointer hover:text-white ${pages ===1?"text-white":""} `} onClick={()=>(setTestType(0))}>Take Test</Link>
        <Link to={'/resources/'} className={`p-3 font-medium   cursor-pointer hover:text-white ${pages ===2?"text-white":""} `}>Resources</Link>
        {/* <Link to={'/about-us/'} className="p-3 font-medium   cursor-pointer hover:border-[#6b6910] hover:border-b-4  ">About Us</Link> */}
        {/* <div className="p-3 font-medium   cursor-pointer hover:border-[#6b6910] hover:border-b-4  ">Take Quiz</div>
        <div className="p-3 font-medium   cursor-pointer hover:border-[#6b6910] hover:border-b-4  ">Chat Health</div> */}
        
      </div>
      {/* {
            currentState ? (

            <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                onClick={()=>{setCurrentState(!currentState)}}>

            </div>
            ):("")
        } */}
        {/* <div className={
            currentState 
            ?'fixed top-0 right-0 w-[300px] h-screen bg-[#c9cb8f] z-10 duration-300' 
            :'fixed top-0 right-[-100%] w-[300px] h-screen bg-[#c9cb8f] z-10 duration-300'}>

                <AiOutlineClose
                    onClick={()=>{setCurrentState(!currentState)}}
                    size={25}
                    className='absolute right-4 top-4 cursor-pointer'/>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900 items-center'>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                            Home
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                            Insight your City
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                           17s SDG
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                            Articles
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                            Take Quiz
                        </li>
                        <li className='text-xl py-4 flex cursor-pointer hover:border-[#6b6910] hover:border-b-4'>
                            Chat Health
                        </li>
                    </ul>
                </nav>
            
        </div> */}
    </div>
)
};

export default Nav;
