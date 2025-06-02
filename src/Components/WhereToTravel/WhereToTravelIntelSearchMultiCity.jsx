import React from "react";
import Minus from "./../../assets/SVG/minus.svg";
import Plus from "./../../assets/SVG/plus.svg";
import XFill from "./../../assets/SVG/X Fill.svg";

function WhereToTravelIntelSearchMultiCity() {
  return (
    <div className="bg-[#DBDDED] rounded-t-2xl mt-8">
      <div className="WhereToTravelBox p-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-xl font-semibold">
            Where would you like to travel?
          </h4>
        </div>
        <div className="cityDetails-1 flex items-center gap-8 my-5">
          <div className="city-names-and-button bg-[#6B71B2] px-9 py-4 rounded-[30px] w-1/2 text-white font-normal text-xl flex justify-between">
            <span>US | Los Angeles</span>
            <span className="expandBtn bg-[#6B71B2] ">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
          </div>
          <div className="min-days-btn w-1/5 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Min Days</span>
            <div className="flex gap-3">
              <span>
                <img src={Minus} alt="" className="inline-block" />
              </span>
              <span>3</span>
              <span>
                <img src={Plus} alt="" className="inline-block" />
              </span>
            </div>
          </div>
          <div className="min-days-btn w-1/5 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Max Days</span>
            <div className="flex gap-3">
              <span>
                <img src={Minus} alt="" className="inline-block" />
              </span>
              <span>3</span>
              <span>
                <img src={Plus} alt="" className="inline-block" />
              </span>
            </div>
          </div>
           
        </div>
        <div className="cityDetails-2 flex items-center gap-8 my-5">
          <div className="city-names-and-button bg-[#6B71B2] px-9 py-4 rounded-[30px] w-1/2 text-white font-normal text-xl flex justify-between">
            <span>US | Los Angeles</span>
            <span className="expandBtn bg-[#6B71B2] ">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
          </div>
          <div className="min-days-btn w-1/5 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Min Days</span>
            <div className="flex gap-3">
              <span>
                <img src={Minus} alt="" className="inline-block" />
              </span>
              <span>3</span>
              <span>
                <img src={Plus} alt="" className="inline-block" />
              </span>
            </div>
          </div>
          <div className="min-days-btn w-1/5 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Max Days</span>
            <div className="flex gap-3">
              <span>
                <img src={Minus} alt="" className="inline-block" />
              </span>
              <span>3</span>
              <span>
                <img src={Plus} alt="" className="inline-block" />
              </span>
            </div>
          </div>
          <span>
            <img src={XFill} alt="" />
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
          <button className="rounded-[32px] bg-white flex items-center justify-between h-14 w-44  py-3 px-7 text-xl">
            <span>+</span>
            <span className="text-left">Add City</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhereToTravelIntelSearchMultiCity;
