import React from "react";
import { useNavigate } from "react-router-dom";

function TravelDetails() {

  const navigate = useNavigate()

  return (
    <>
      <div className="travelDetailContainer bg-[#DBDDED] rounded-b-2xl p-8">
        <hr className="border-gray-400 m-2" />
        <h5 className="heading text-left text-xl font-semibold">
          Travel Details
        </h5>
        <div className="departureAndReturn grid grid-cols-2 items-center justify-around gap-5 mt-8">
          {/* 1st Select  */}
          <div className="departure flex items-center bg-white rounded-full px-6 gap-5">
            <span>Departure</span>
            <select
              className="rounded-[32px] w-full h-14 flex-1 text-[#636C72] font-normal outline-none appearance-none text-sm"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          {/* 2ns Select */}
          <div className="return flex items-center bg-white rounded-full px-6 gap-5">
            <span>Return</span>
            <select
              className="rounded-[32px] w-full h-14 flex-1 text-[#636C72] font-normal  outline-none appearance-none text-sm"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6">
            <span>Earliest Departure</span>
            <input type="date" className="w-full outline-none" name="" id="" />
          </div>
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6">
            <span>Earliest Departure</span>
            <input type="date" className="w-full outline-none" name="" id="" />
          </div>
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6">
            <span>No. of Travellers</span>
            <div className="flex w-full gap-5 items-center">
              <select
                className="rounded-[32px] w-full h-6 flex-1 text-[#636C72] font-normal  outline-none appearance-none text-sm"
                name=""
                id=""
              >
                <option value="">00</option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 my-6">
        <button className="bg-[#6B71B2] w-[186px] h-[60px] rounded-[32px] text-white" onClick={()=>{navigate('/intel-collapsed')}}>
          Search Flights
        </button>
      </div>
      <hr className="border-gray-400 m-2 my-5" />
    </>
  );
}

export default TravelDetails;
