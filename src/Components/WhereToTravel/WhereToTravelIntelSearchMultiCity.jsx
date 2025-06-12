import React from "react";
import Minus from "./../../assets/SVG/minus.svg";
import Plus from "./../../assets/SVG/plus.svg";
import XFill from "./../../assets/SVG/X Fill.svg";
import { useNavigate } from "react-router-dom";

function WhereToTravelIntelSearchMultiCity() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#DBDDED] rounded-t-2xl mt-8">
      <div className="WhereToTravelBox px-5 lg:px-8 py-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-xl font-semibold">
            Where would you like to travel?
          </h4>
        </div>
        <div className="cityDetails-1 grid grid-cols-2 gap-4 xl:flex xl:items-center xl:gap-8 my-5 relative pt-12 xl:pt-0 border-2 border-gray-400 rounded-xl xl:border-none p-3 xl:p-0 pb-5">
          <div className="city-names-and-button col-span-2 bg-[#6B71B2] px-9 py-4 rounded-[30px] xl:w-1/2 text-white font-normal text-xl flex justify-between">
            <span>US | Los Angeles</span>
            <span className="expandBtn bg-[#6B71B2] cursor-pointer ">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
          </div>
          <div className="min-days-btn xl:w-1/5 col-span-2 sm:col-span-1 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Min Days</span>
            <div className="flex gap-3">
              <span>
                <img
                  src={Minus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
              <span>3</span>
              <span>
                <img
                  src={Plus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div className="max-days-btn xl:w-1/5 col-span-2 sm:col-span-1 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Max Days</span>
            <div className="flex gap-3">
              <span>
                <img
                  src={Minus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
              <span>3</span>
              <span>
                <img
                  src={Plus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
            </div>
          </div>
          <span className="xl:block hidden cursor-pointer">
            <img src={XFill} alt="" />
          </span>
          <span className="xl:hidden absolute right-3 top-2 cursor-pointer">
            <img src={XFill} alt="" />
          </span>
        </div>
        <div className="cityDetails-2 grid grid-cols-2 gap-4 xl:flex xl:items-center xl:gap-8 my-5 relative pt-12 xl:pt-0 border-2 border-gray-400 rounded-xl xl:border-none p-3 xl:p-0 pb-5">
          <div className="city-names-and-button col-span-2 bg-[#6B71B2] px-9 py-4 rounded-[30px] xl:w-1/2 text-white font-normal text-xl flex justify-between">
            <span>US | Los Angeles</span>
            <span className="expandBtn bg-[#6B71B2] cursor-pointer ">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </span>
          </div>
          <div className="min-days-btn xl:w-1/5 col-span-2 sm:col-span-1 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Min Days</span>
            <div className="flex gap-3">
              <span>
                <img
                  src={Minus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
              <span>3</span>
              <span>
                <img
                  src={Plus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div className="max-days-btn xl:w-1/5 col-span-2 sm:col-span-1 flex items-center px-8 py-4 bg-white rounded-[30px] justify-between">
            <span className="block">Max Days</span>
            <div className="flex gap-3">
              <span>
                <img
                  src={Minus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
              <span>3</span>
              <span>
                <img
                  src={Plus}
                  alt=""
                  className="inline-block cursor-pointer"
                />
              </span>
            </div>
          </div>
          <span className="xl:block hidden cursor-pointer ">
            <img src={XFill} alt="" />
          </span>
          <span className="xl:hidden absolute right-3 top-2 cursor-pointer">
            <img src={XFill} alt="" />
          </span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 mt-8">
          <div className="selectAndDropBTN relative flex w-full lg:w-[83%] items-center">
            <select
              className="outline-none cursor-pointer rounded-[32px] w-full h-14 px-8 bg-white text-[#636C72] text-xl font-normal appearance-none"
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
            className="hover:bg-slate-100 rounded-[32px] bg-white flex items-center justify-center gap-3 h-14 lg:w-[15%] whitespace-nowrap  py-3 px-7 text-lg"
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

export default WhereToTravelIntelSearchMultiCity;
