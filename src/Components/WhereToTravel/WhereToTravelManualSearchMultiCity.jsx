import React from "react";
import XFill from "./../../assets/SVG/X Fill.svg";

function WhereToTravelManualSearchMultiCity() {
  return (
    <div className="main-box">
      <div className="w-full bg-[#DBDDED] p-8 rounded-2xl shadow-md mt-7">
        <div className="grid grid-rows-4 grid-cols-3 gap-x-4 gap-y-6">
          <span className="text-left p-4 text-xl col-start-1 col-end-3">
            Where would you like to travel?
          </span>
          <div className="bg-white py-4 px-8 rounded-[30px] flex items-center justify-between w-[92%]">
            <label htmlFor="travelersno" className="text-left">
              No. of Travellers
            </label>
            <select
              name=""
              id="travelersno"
              className="w-1/2 appearance-none outline-none px-2 text-[#636C72] pl-5 text-base"
            >
              <option value="">04</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>

          {/* 2nd row start */}
          <div className="inputAndFLightIcon flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="travelform" className="text-left">
                From
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  Los Angeles (LAX)
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex justify-end items-center w-[8%]">
              <i className="fa-solid fa-plane -rotate-45"></i>
            </p>
          </div>
          <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
            <label htmlFor="travelform" className="text-left">
              To
            </label>
            <select
              name=""
              id="travelfrom"
              className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
            >
              <option value="" className="">
                Amsterdam (AMS)
              </option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <div className="inputAndCloseBtn flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="departDate" className="text-left">
                Depart
              </label>
              <select
                name=""
                id="departDate"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  29/09/2024
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex items-center justify-center w-[8%]">
              <img src={XFill} alt="" className="w-5 h-5" />
            </p>
          </div>

          {/* 3rd row start */}
          <div className="inputAndFLightIcon flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="travelform" className="text-left">
                From
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  Amsterdam (AMS)
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex justify-end items-center w-[8%]">
              <i className="fa-solid fa-plane -rotate-45"></i>
            </p>
          </div>
          <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
            <label htmlFor="travelform" className="text-left">
              To
            </label>
            <select
              name=""
              id="travelfrom"
              className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
            >
              <option value="" className="">
                Indore (IDR)
              </option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <div className="inputAndCloseBtn flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="departDate" className="text-left">
                Depart
              </label>
              <select
                name=""
                id="departDate"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  03/10/2024
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex items-center justify-center w-[8%]">
              <img src={XFill} alt="" className="w-5 h-5" />
            </p>
          </div>

          {/* 4th Row Start  */}
          <div className="inputAndFLightIcon flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="travelform" className="text-left">
                From
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  Indore (IDR)
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex justify-end items-center w-[8%]">
              <i className="fa-solid fa-plane -rotate-45"></i>
            </p>
          </div>
          <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
            <label htmlFor="travelform" className="text-left">
              To
            </label>
            <select
              name=""
              id="travelfrom"
              className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
            >
              <option value="" className="">
                Kochi (COK)
              </option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          <div className="inputAndCloseBtn flex">
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-[92%]">
              <label htmlFor="departDate" className="text-left">
                Depart
              </label>
              <select
                name=""
                id="departDate"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
              >
                <option value="" className="">
                  05/10/2024
                </option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <p className="flex items-center justify-center w-[8%]">
              <img src={XFill} alt="" className="w-5 h-5" />
            </p>
          </div>
        </div>

        {/* Grid ends here */}

        <button className="rounded-[32px] bg-white flex items-center justify-center gap-3 h-14 w-44  py-3 px-7 text-xl mx-auto mt-8">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </span>
          <span className="text-left">Add City</span>
        </button>
      </div>

      {/* button form here */}
      <button className="bg-[#6B71B2] rounded-[32px] text-white w-[186px] h-[60px] mt-10">
        Search Flight
      </button>
      <hr className="border-gray-400 m-2 my-5" />
    </div>
  );
}

export default WhereToTravelManualSearchMultiCity;
