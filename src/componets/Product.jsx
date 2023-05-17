import React from "react";

import fincare from "./images/miko.jpg";
import checkl from "./images/checkL.png";

function Product() {
  const about = [
    {
      id: 1,
      p1: "Multi Channel",
      desc: "20 channels, detectmore items one time",
    },
    {
      id: 2,
      p1: "Reliable Accuracy",
      desc: "Good correlation with CLIA method",
    },
    {
      id: 3,
      p1: "Temprature control",
      desc: "Provide better reaction conditione",
    },
    {
      id: 4,
      p1: "Rapid Test",
      desc: "High speed of detection,enable 200 tests per hour",
    },
  ];

  return (
    <div className="m-3 h-auto sm:m- md:m-40 md:my-1 md:mt-10 rounded-lg ">
      <div className="">
        <img
          className="h-64 sm:h-96 w-[100%] rounded lg:h-fit border"
          src={fincare}
          alt="lean-img"
        />
        <div className="my-1 text-left sm:absolute  bg-white sm:w-[25%] md:h-76 sm:-translate-y-72  md:-translate-y-[115%] lg:translate-x-20 lg:p-5 rounded-md  border-none lg:shadow-md">
          <h2 className=" ml-5 mb-7  text-cyan-600 font-semibold text-xl ">
            FIA Meter III Plus (FS-205)
          </h2>
          <p className="font-light mx-6 ">
            The FIA Meter III Plus (FS-205) is a specific model of a
            fluorescence immunoassay (FIA) meter.{" "}
          </p>
          <div className="p-0 lg:p-2 my-1">
            {about.map(({ id, p1, desc }) => {
              return (
                <div className="flex p-2" key={id}>
                  <img src={checkl} className="w-6 h-6" alt="multi" />
                  <p className="ml-10  flex-col absolute font-light ">{p1}</p>
                  <p className="mt-7 ml-4 font-thin ">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
