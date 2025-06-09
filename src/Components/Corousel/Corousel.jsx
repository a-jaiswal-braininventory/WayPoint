import React from "react";
import CorouselIMG from "../../assets/images/corouselimg.png";

// Capitalized component name
function Card({ keyId }) {
  return (
    <div className="outerbox lg:h-[560px] h-[450px]" key={keyId}>
      <div className="relative w-[430px] lg:w-[536px]">
        <img className="w-[375px] lg:w-[536px]" src={CorouselIMG} alt="" />
        <div className="contentBox shadow-md bg-white p-5 lg:p-8 rounded-2xl w-[290px] lg:w-[454px] h-[228px] lg:h-[228px] absolute lg:-bottom-[calc(200px/2)] -bottom-[calc(250px/2)]  lg:start-1/2 start-1/3  lg:-translate-x-1/2 -translate-x-1/3">
          <div className="flex justify-between font-medium">
            <h1 className="text-lg lg:text-xl">Columbia | Peru | Brazil</h1>
            <span className="expandBtn bg-[#6B71B2] w-7 h-7 lg:h-10 lg:w-10 flex items-center justify-center rounded-full  cursor-pointer">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-white"></i>
            </span>
          </div>
          <div className="content-data text-left text-sm">
            Explore the charming and historic cities of Amsterdam, Utrecht,
            Rotterdam, and The Hague. Wander through cobblestone streets lined
            with historic buildings, visit iconic landmarks...
          </div>
          <div className="options flex justify-between pt-5">
            <h5 className="bg-[#EDEEF6] rounded-full px-2 lg:px-6 py-1.5 text-xs lg:text-base font-base">
              3 Countries
            </h5>
            <h5 className="bg-[#EDEEF6] rounded-full px-2 lg:px-6 py-1.5 text-xs lg:text-base font-base">
              5 Cities
            </h5>
            <h5 className="bg-[#EDEEF6] rounded-full px-2 lg:px-6 py-1.5 text-xs lg:text-base font-base">
              18-21 Days
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

function Corousel() {
  const loop = [1, 2, 3, 4];
  return (
    <div className="corouselContainer mb-8 flex flex-nowrap overflow-x-auto">
      {loop.map((i) => (
        <Card key={i} keyId={i} />
      ))}
    </div>
  );
}

export default Corousel;
