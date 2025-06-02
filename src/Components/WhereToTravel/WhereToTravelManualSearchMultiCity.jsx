import React from "react";
import XFill from "./../../assets/SVG/X Fill.svg";

function WhereToTravelManualSearchMultiCity() {
  return (
    <div className="main-box">
      <div className="w-full bg-[#DBDDED] p-8 rounded-2xl shadow-md mt-7">
        <div className="flex">
          <div className="inner-box-left w-2/3">
            <h1 className="heading text-left p-4 mb-4 text-xl">
              Where would you like to travel?
            </h1>
            <div className="1st-row mt-4 flex gap-4">
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
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
              <p className="flex justify-center items-center">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
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
            </div>
            <div className="2nd-row flex gap-4 mt-5">
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
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
              <p className="flex justify-center items-center">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
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
            </div>
            <div className="3rd-row flex gap-4 mt-5">
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
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
              <p className="flex justify-center items-center">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="bg-white px-8 py-4 rounded-[30px] w-1/2 flex items-center">
                <label htmlFor="travelform" className="text-left">
                  To
                </label>
                <select
                  name=""
                  id="travelfrom"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
                >
                  <option value="" className="">
                    Cochi (COK)
                  </option>
                </select>
                <div className="dropBTN cursor-pointer">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-box-right w-1/3 pl-6 flex flex-col gap-4">
            <div className="1st-row flex">
              <div className="bg-white py-4 px-8 rounded-[30px] w-full flex items-center justify-between">
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
            </div>
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
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
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
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
            <div className="bg-white px-8 py-4 rounded-[30px] flex items-center">
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
          </div>
        </div>
        <button className="rounded-[32px] bg-white flex items-center justify-between h-14 w-44  py-3 px-7 text-xl mx-auto mt-8">
          <span>+</span>
          <span className="text-left">Add City</span>
        </button>
      </div>
      <button className="bg-[#6B71B2] rounded-[32px] text-white w-[186px] h-[60px] mt-10">
        Search Flight
      </button>
      <hr className="border-gray-400 m-2 my-5" />
    </div>
  );
}

export default WhereToTravelManualSearchMultiCity;
