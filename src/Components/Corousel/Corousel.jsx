import React from "react";
import CorouselIMG from "../../assets/images/corouselimg.png";

// Capitalized component name
function Card({ keyId }) {
  return (
    <div className="outerbox md:h-[560px]" key={keyId}>
      <div className="relative w-[536px]">
        <img className="w-[536px]" src={CorouselIMG} alt="" />
        <div className="contentBox shadow-md bg-white p-8 rounded-2xl w-[454px] h-[228px] absolute -bottom-[calc(228px/2)] start-1/2 -translate-x-1/2">
          <div className="flex justify-between">
            <h1 className="text-xl">Columbia | Peru | Brazil</h1>
            <span className="expandBtn bg-[#6B71B2] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-white"></i>
            </span>
          </div>
          <div className="content-data text-left text-sm">
            Explore the charming and historic cities of Amsterdam, Utrecht,
            Rotterdam, and The Hague. Wander through cobblestone streets lined
            with historic buildings, visit iconic landmarks...
          </div>
          <div className="options flex justify-between pt-5">
            <h5 className="bg-[#EDEEF6] rounded-full px-6 py-1.5">
              3 Countries
            </h5>
            <h5 className="bg-[#EDEEF6] rounded-full px-6 py-1.5">5 Cities</h5>
            <h5 className="bg-[#EDEEF6] rounded-full px-6 py-1.5">
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
