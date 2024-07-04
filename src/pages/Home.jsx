import React, { useState, useEffect } from "react";
import ApexChart from "../components/ApexChart";
import SensitiveData from "../components/SensitiveData";
import { CiPower } from "react-icons/ci";
import { TbRubberStamp } from "react-icons/tb";
import InsensitiveData from "../components/InsensitiveData";
import { Link } from "react-router-dom";

export default function Home({showNotification}) {
  const [isSensitive,setIsSensitive] = useState(true)
  const [message, setMessage] = useState('');
  const [isActive,setIsActive] = useState(false)
  
  const toggleActive = ()=>{
    setIsActive(!isActive)
  }
  const toggle = ()=>{
    setIsSensitive(!isSensitive)
    toggleActive()
  } 

  useEffect(() => {
    console.log("Home component mounted");
   

    window.addEventListener('message', handleWindowMessage);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleWindowMessage);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  function handleWindowMessage(event) {
    setMessage(event.data.payload);
    if (event.data.type === 'FROM_EXTENSION') {
      console.log("Received message from the window", event.data.payload)
      // Handle the message payload here
      // notific 
      showNotification()
    }
  }

  return (
    <div className="h-[600px] border   rounded p-2 w-[400px]  mr-[1rem] flex float-right">
      <div className="   bg-white ">
        <div className="w-[191px] ">
          <div className="w-12 h-12 " />
          <div className="flex justify-start align-bottom">
            <img height={'50px'} width={'50px'} src="images/icon128.png" alt="" />
            <span className="ms-1 font-bold">Privacy Pro</span>
          </div>
        </div>
        {/* <div className="mt-[1rem]"><Link className="underline" to='/Dashboard'>Visit Dashboard</Link></div> */}
        
        

        <div className="flex  justify-center items-center gap-[52px] p-[1rem]">
          <div>
            <ApexChart />
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex">
            <div className="text-black text-2xl font-semibold font-['Inter']">
              Personal Data
            </div>
            <div className="h-6 justify-start items-center gap-2 inline-flex">
              <div
              
                className="w-6 h-6  rounded"
                style={{ backgroundColor: "#3366FF" }}
              />
              <span>Sensitive</span>
            </div>
            <div className="h-6 justify-start items-center gap-2 inline-flex">
              <div
                className="w-6 h-6  rounded"
                style={{ backgroundColor: "#FF5733" }}
              />
              <div  className="text-black text-lg font-normal font-['Inter']">
                Insensitive
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[15px] py-1.5  bg-zinc-500 rounded-[5px]  items-end  flex  justify-between">
          <div  className={`px-[15px] hover:bg-zinc-500  bg-white py-1.5  rounded-[5px] justify-start items-center gap-2.5 flex`}>
            <div className="text-zinc-500 hover:text-white capitalize hover:cursor-pointer text-xs font-semibold font-['Inter']">
              sensitive
            </div>
          </div>
          <div onClick={toggle} className={`px-[15px] ${isActive?'bg-white text-zinc-500':''} py-1.5 hover:cursor-pointer rounded-[5px] justify-start items-center gap-2.5 flex `}>
            <div className={`text-white ${isActive?' text-zinc-500':''} text-xs capitalize font-semibold font-['Inter']`}>
              Personal Data
            </div>
          </div>
        </div>
        {/*  */}
       {isSensitive?<SensitiveData />:<InsensitiveData />} 
        {/* button */}

        <div className="flex justify-center mt-[2rem]">
        

          <button className=" text-red-500 hover:text-red-400 border p-2  rounded flex justify-center items-center gap-2 "> <span className=""><CiPower /></span> <span>Disable for this Site</span> </button>
        </div>
      </div>
      
    </div>
  );
}
