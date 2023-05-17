import React from "react";

import fincare from './images/miko.jpg'
import checkl from './images/checkL.png'

function Product() {
  return (
    <div className="m-3 h-auto sm:m- md:m-40 md:my-1 md:mt-10 rounded-lg ">
      <div className="">
        <img
          className="h-64 sm:h-96   w-[100%] rounded lg:h-fit border"
          src={fincare}
          alt="lean-img"
        />
        <div className="my-1 text-left sm:absolute  bg-white sm:w-[25%] md:h-76 sm:-translate-y-72  md:-translate-y-[115%] lg:translate-x-20 lg:p-5 rounded-md  border-none lg:shadow-md">
          <h2 className=" ml-5 mb-7  text-cyan-600 font-semibold text-xl ">
            FIA Meter III Plus (FS-205)
          </h2>
          <p className="font-light mx-6 ">
           The FIA Meter III Plus (FS-205) is a specific model of a fluorescence immunoassay (FIA) meter.  </p> 
            <div className="p-0 lg:p-2 my-1">
              <div className="flex p-2">
                <img src={checkl} className="w-6 h-6  " alt="multi" />
                <p className="ml-10  flex-col absolute font-light ">Multi-Channel</p>
                <p className="mt-7 ml-4 font-thin ">20 channels, detect
                   more items one time</p>
                
              </div>
              <div className="flex p-2">
                <img src={checkl} className="w-6 h-6 " alt="multi" />
                <p className="ml-10  flex-col absolute font-light ">Reliable Accuracy</p>
                <p className="mt-7 ml-4 font-thin ">Good correlation
                                                    with CLIA method</p>
              </div>
              <div className="flex p-2">
                <img src={checkl} className="w-6 h-6 " alt="multi" />
                <p className="ml-10  flex-col absolute font-light ">Temperature control</p>
                <p className="mt-7 ml-4 font-thin ">Provide better
                                                    reaction condition</p>
              </div>
               <div className="flex p-2">
            <img src={checkl} className="w-6 h-6 " alt="multi" />
                <p className="ml-10  flex-col absolute font-light ">Rapid Test</p>
                <p className="mt-7 ml-4 font-thin ">High speed of detection,
                                                     enable 200 tests per hour</p>
              </div>
            </div>
        
          {/* <button className="mt-8 lg:mt-0 bg-[#1782AA] p-2 rounded hover:bg-cyan-700 text-white">
            LEARN MORE
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
