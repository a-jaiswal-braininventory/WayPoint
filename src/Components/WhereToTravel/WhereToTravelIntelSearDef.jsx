import React from "react";
import { useNavigate } from "react-router-dom";

function WhereToTravelIntelSearDef() {

  const navigate = useNavigate()
  return (
    <div className="bg-[#DBDDED] rounded-t-2xl mt-8">
      <div className="WhereToTravelBox p-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-xl font-semibold">
            Where would you like to travel?
          </h4>
          <span className="expandBtn bg-white h-10 w-10 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          </span>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <div className="selectAndDropBTN relative flex flex-1 items-center">
            <select
              className="rounded-[32px] w-full h-14 px-8  py- text-[#636C72] text-xl font-normal appearance-none"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN absolute my-auto right-6 cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <button className="rounded-[32px] bg-white flex items-center justify-between h-14 w-44  py-3 px-7 text-xl" onClick={()=>{navigate('/intelsearch-multicity')}}>
            <span>+</span>
            <span className="text-left">Add City</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhereToTravelIntelSearDef;
