import React from "react";
import XFill from "./../../assets/SVG/X Fill.svg";

function WhereToTravelManualSearchMultiCity() {
  return (
    <div className="main-box">
      <div className="w-full bg-[#DBDDED] py-8 px-5 llg:px-8 rounded-2xl shadow-md mt-7 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-x-4 gap-x-2 gap-y-4">
          <div className="text-left p-4 text-base md:text-xl col-span-2">
            Where would you like to travel?
          </div>
          <div className="bg-white py-4 px-8 rounded-[30px] flex items-center justify-between w-full xl:w-[92%] col-span-2 xl:col-span-1 relative">
            <label
              htmlFor="travelersno"
              className="text-left whitespace-nowrap"
            >
              No. of Travellers
            </label>
            <select
              name=""
              id="travelersno"
              className="appearance-none outline-none px-2 text-[#636C72] pl-5 text-base w-full bg-white cursor-pointer"
            >
              <option value="">04</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>

          {/* 2nd Row Start  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 col-span-3 pt-10 px-3 pb-3 xl:p-0 xl:border-none rounded-2xl border-2 border-gray-400 relative ">
            <div className="inputAndFLightIcon flex">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label
                  htmlFor="travelform"
                  className="text-left whitespace-nowrap"
                >
                  From
                </label>
                <select
                  name=""
                  id="travelfrom"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    Los Angeles (LAX)
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="hidden justify-end items-center lg:flex w-[8%]">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
            </div>
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center  relative">
              <label htmlFor="travelform" className="text-left">
                To
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
              >
                <option value="" className="">
                  Amsterdam (AMS)
                </option>
              </select>
              <div className="dropBTN cursor-pointer absolute right-6">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <div className="inputAndCloseBtn flex col-span-1 sm:col-span-2 xl:col-span-1 ">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label htmlFor="departDate" className="text-left">
                  Depart
                </label>
                <select
                  name=""
                  id="departDate"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    29/09/2024
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="xl:flex items-center justify-center hidden w-[8%] cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>

              <p className="absolute top-3 right-4 items-center justify-center xl:hidden cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>
            </div>
          </div>

          {/* 3rd row start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 col-span-3 pt-10 xl:p-0 px-3 pb-3 xl:border-none rounded-2xl border-2 border-gray-400 relative">
            <div className="inputAndFLightIcon flex">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label
                  htmlFor="travelform"
                  className="text-left whitespace-nowrap"
                >
                  From
                </label>
                <select
                  name=""
                  id="travelfrom"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    Amsterdam (AMS)
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="hidden justify-end items-center lg:flex w-[8%]">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
            </div>
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center  relative">
              <label htmlFor="travelform" className="text-left">
                To
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
              >
                <option value="" className="">
                  Indore (IDR)
                </option>
              </select>
              <div className="dropBTN cursor-pointer absolute right-6">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <div className="inputAndCloseBtn flex col-span-1 sm:col-span-2 xl:col-span-1 ">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label htmlFor="departDate" className="text-left">
                  Depart
                </label>
                <select
                  name=""
                  id="departDate"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    03/10/2024
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="xl:flex items-center justify-center hidden w-[8%] cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>
              <p className="absolute top-3 right-4 items-center justify-center xl:hidden cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>
            </div>
          </div>

          {/* 4th row start */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 col-span-3 pt-10 xl:p-0 px-3 pb-3 rounded-2xl border-2 border-gray-400 relative xl:border-none ">
            <div className="inputAndFLightIcon flex">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label
                  htmlFor="travelform"
                  className="text-left whitespace-nowrap"
                >
                  From
                </label>
                <select
                  name=""
                  id="travelfrom"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    Indore (IDR)
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="hidden justify-end items-center lg:flex w-[8%]">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
            </div>
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center relative">
              <label htmlFor="travelform" className="text-left">
                To
              </label>
              <select
                name=""
                id="travelfrom"
                className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
              >
                <option value="" className="">
                  Kochi (COK)
                </option>
              </select>
              <div className="dropBTN cursor-pointer absolute right-6">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <div className="inputAndCloseBtn flex col-span-1 sm:col-span-2 xl:col-span-1 ">
              <div className="bg-white px-8 py-4 rounded-[30px] flex items-center w-full xl:w-[92%] relative">
                <label htmlFor="departDate" className="text-left">
                  Depart
                </label>
                <select
                  name=""
                  id="departDate"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5 bg-white cursor-pointer"
                >
                  <option value="" className="">
                    05/010/2024
                  </option>
                </select>
                <div className="dropBTN cursor-pointer absolute right-6">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="xl:flex items-center justify-center hidden w-[8%] cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>

              <p className="absolute top-3 right-4 items-center justify-center xl:hidden cursor-pointer">
                <img src={XFill} alt="" className="w-5 h-5" />
              </p>
            </div>
          </div>
        </div>

        {/* Grid ends here */}

        <button className="rounded-[32px] bg-white flex items-center justify-center gap-3 h-14 w-44  py-3 px-7 text-xl mx-auto mt-8 hover:bg-gray-100">
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
