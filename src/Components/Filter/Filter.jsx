import React from "react";
import reset from "../../assets/SVG/reset.svg";
import RangeSlider from "../RangeSlider/RangeSlider";

function Filter( {setShowFilters}) {
  return (
    <div className="filter-box">
      {/* Sort and current dropdown */}
      <div className="sortnCurrency flex flex-col xl:flex-row gap-3 mt-10 px-4">
        <div className="flex flex-col w-full xl:w-1/2 relative">
          <label htmlFor="" className="text-xl font-normal text-left">
            Sort By
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 gap-2 flex justify-between px-4">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit w-full outline-none cursor-pointer"
            >
              <option value="">Best Overall</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-5 bottom-2">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:w-1/2 relative ">
          <label htmlFor="" className="text-xl font-normal text-left">
            Currency
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 gap-2 flex justify-between px-4">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit outline-none w-full cursor-pointer"
            >
              <option value="">AUD ($) </option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-5 bottom-2">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Filter heading and reset button  */}
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center items-start mt-4 px-4">
        <span className="text-[40px] font-bold">Filters</span>
        <button className="bg-[#DBDDED] rounded-3xl px-4 py-1 items-center whitespace-nowrap">
          <span className="text-base font-normal">Reset</span>
          <span className="pl-1">
            <img src={reset} alt="" className="inline-block h-4 w-4" />
          </span>
        </button>
      </div>

      {/* filter Categories  */}
      <div className="filter-categories px-4">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">
            Flight Outbound
          </span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-4">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">Flight Inbound</span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-4">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">Total Duration</span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-4">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">
            Stopover Duration
          </span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-4">
        <div className="singleCategory flex flex-col gap-2 mt-7 mb-5">
          <span className="text-left font-normal text-2xl">
            Stopover Duration
          </span>
          <RangeSlider />
        </div>
      </div>

      {/* bottom options dropdown  */}

      <div className="bottom-options px-4 mb-8">
        <div className="single-option mt-8 relative">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Maximum Stopovers
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal w-full outline-none cursor-pointer "
            >
              <option value="">01</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="single-option mt-8 relative">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Search Modes
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal w-full outline-none cursor-pointer"
            >
              <option value="">Cash Flights</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="single-option mt-8 relative">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Rewards Partner
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal w-full outline-none cursor-pointer "
            >
              <option value="">Emirates</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <div className="xl:hidden block">
            <button className="w-2/3 bg-[#6B71B2] mx-auto rounded-3xl p-5 text-white my-10 hover:bg-[#8188d3]"
            onClick={()=>{setShowFilters(false)}}>Close Filters</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
