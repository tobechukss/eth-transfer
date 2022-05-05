import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Michi from "../assets/images/Michi2.png"




const Welcome = (props) => {
  const clickd =(one) => {
    onclick = props.handleClick(one)
    
}
    
    return (
        <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-center flex-col md:mr-10">
            <div>
          <h1 className="text-5xl md:text-7xl text-white py-1">
          Discover the Secret life of Animal NFTs
          </h1>
          <div className="my-10 text-white flex md:flex-row flex-col">
        <button className="bg-[#bc715b] flex justify-center py-5 px-10 my-2 rounded-md cursor-pointer hover:bg-[#2546bd]" onClick={()=>{clickd("the_nfts")}}>
          View NFTs
          <HiArrowNarrowRight fontSize={28} className="text-white cursor-pointer mx-2"/>
        </button>
        <button className="border-2 border-brand-orange py-5 px-10 md:mx-5 my-2 rounded-md cursor-pointer hover:bg-[#bc715b]" onClick={()=>{clickd("send_coins")}}>
          Send ETH
        </button>
        </div>
        </div>

        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
         
                <img src={Michi} alt="Michi"/>
            <div className=" white-glassmorphism  bg-slate absolute  rotate-25 idcard ">
                <div className="w-4/5 h-px bg-white mt-4  mb-1 mx-auto"></div>
                <div className="text-white mx-10 ">
                <h1 className="text-xl ">Michi the Cat <br/> 0.9 ETH</h1>
              
                <p className=" max-w-xs text-9">Secret Agent Michi is surprisingly a hardworking cat and doesn't joke with his job.</p>
                </div>
                
            </div>
      
        
        </div>
      </div>
    </div>
    )
}

export default Welcome