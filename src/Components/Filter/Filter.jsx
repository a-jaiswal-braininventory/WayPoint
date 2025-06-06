import React from "react";
import reset from "../../assets/SVG/reset.svg";
import RangeSlider from "../RangeSlider/RangeSlider";

function Filter() {
  return (
    <div className="filter-box">
      {/* Sort and current dropdown */}
      <div className="sortnCurrency flex gap-3 mt-10 px-6">
        <div className="flex flex-col w-1/2">
          <label htmlFor="" className="text-xl font-normal">
            Sort By
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 gap-2 flex justify-between px-6">
            <select name="" id="" className="appearance-none bg-inherit ">
              <option value="">Best Overall</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="" className="text-xl font-normal">
            Currency
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 gap-2 flex justify-between px-6">
            <select name="" id="" className="appearance-none bg-inherit">
              <option value="">AUD ($) </option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Filter heading and reset button  */}
      <div className="flex justify-between items-center mt-4 px-6">
        <span className="text-[40px] font-bold">Filters</span>
        <div className="bg-[#DBDDED] rounded-3xl px-4 py-1 items-center">
          <span className="text-base font-normal">Reset</span>
          <span className="pl-1">
            <img src={reset} alt="" className="inline-block h-4 w-4" />
          </span>
        </div>
      </div>

      {/* filter Categories  */}
      <div className="filter-categories px-7">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">
            Flight Outbound
          </span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-7">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">Flight Inbound</span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-7">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">Total Duration</span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-7">
        <div className="singleCategory flex flex-col gap-2 mt-7">
          <span className="text-left font-normal text-2xl">
            Stopover Duration
          </span>
          <RangeSlider />
        </div>
      </div>
      <div className="filter-categories px-7">
        <div className="singleCategory flex flex-col gap-2 mt-7 mb-5">
          <span className="text-left font-normal text-2xl">
            Stopover Duration
          </span>
          <RangeSlider />
        </div>
      </div>

      {/* bottom options dropdown  */}

      <div className="bottom-options px-7 mb-8">
        <div className="single-option mt-8">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Maximum Stopovers
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal "
            >
              <option value="">01</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="single-option mt-8">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Search Modes
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal "
            >
              <option value="">Cash Flights</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="single-option mt-8">
          <label htmlFor="" className="text-xl font-medium text-left block">
            Rewards Partner
          </label>
          <div className="input-drop rounded-[30px] bg-[#DBDDED] p-3 mt-4 flex justify-between px-6">
            <select
              name=""
              id=""
              className="appearance-none bg-inherit text-left text-xl font-normal "
            >
              <option value="">Emirates</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
