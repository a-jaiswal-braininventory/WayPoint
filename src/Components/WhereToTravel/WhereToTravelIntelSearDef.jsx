import React from "react";
import { useNavigate } from "react-router-dom";

function WhereToTravelIntelSearDef() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#DBDDED] rounded-t-2xl mt-8">
      <div className="WhereToTravelBox pt-8 px-5 lg:px-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-lg lg:text-xl font-semibold">
            Where would you like to travel?
          </h4>
          <span className="expandBtn bg-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          </span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 mt-8">
          <div className="selectAndDropBTN relative flex w-full lg:w-[83%] items-center">
            <select
              className="rounded-[32px] w-full h-14 px-8 bg-white text-[#636C72] text-xl font-normal appearance-none"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN absolute my-auto right-6 cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <button
            className="rounded-[32px] bg-white flex items-center justify-around gap-2 h-14 lg:w-[15%] whitespace-nowrap  py-3 px-7 text-md"
            onClick={() => {
              navigate("/intelsearch-multicity");
            }}
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            <span className="text-left">Add City</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhereToTravelIntelSearDef;
