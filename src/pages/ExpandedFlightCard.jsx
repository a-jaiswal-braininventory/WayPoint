import React from "react";
import Flight1 from "../Components/ExpandedFlightCards/Flight1";
import Flight2 from "../Components/ExpandedFlightCards/Flight2";
import Flight3 from "../Components/ExpandedFlightCards/Flight3";
import XFill from "../assets/SVG/X Fill.svg"
import { useNavigate } from "react-router-dom";
function ExpandedFlightCard() {

  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="w-full bg-[#DBDDED] rounded-xl overflow-hidden py-10 px-8 relative">
          <div className="main-Container flex flex-wrap gap-4">
            <Flight1 />
            <Flight2 />
            <Flight3 />
          </div>
          <p className="absolute top-6 right-10 items-center justify-center cursor-pointer" onClick={()=>{navigate(-1)}}>
            <img src={XFill} alt="" className="w-18 h-8" />
          </p>
        </div>
        <div className="bottom-Part w-full p-4 bg-[#7179BD]">
          <div className="bookFLightBox py-4">
            <h1 className="text-white text-3xl font-bold ">$758</h1>
            <h4 className="text-white text-xl font-medium">51h 35m</h4>
            <button className="bg-white text-black h-[60px] w-[157px] mt-4 rounded-[30px] text-xl font-medium hover:bg-gray-100">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandedFlightCard;
