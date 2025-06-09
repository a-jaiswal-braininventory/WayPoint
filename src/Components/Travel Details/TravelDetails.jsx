import React from "react";
import { useNavigate } from "react-router-dom";

function TravelDetails() {
  const navigate = useNavigate();

  return (
    <>
      <div className="travelDetailContainer bg-[#DBDDED] rounded-b-2xl pt-4 pb-8 px-5 lg:px-8">
        <hr className="border-gray-400 mx-2 my-5" />
        <h5 className="heading text-left text-lg lg:text-xl font-semibold">
          Travel Details
        </h5>
        <div className="departureAndReturn flex flex-col lg:flex-row items-center justify-between mt-8">
          {/* 1st Select  */}
          <div className="departure flex items-center bg-white rounded-full px-6 gap-5 lg:w-[48%] w-full relative">
            <span>Departure</span>
            <select
              className="rounded-[32px] w-full h-14 flex-1 bg-white text-[#636C72] font-normal outline-none appearance-none text-sm"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
          {/* 2ns Select */}
          <div className="return flex items-center bg-white rounded-full px-6 gap-5 lg:w-[48%] w-full mt-4 lg:mt-0 relative">
            <span>Return</span>
            <select
              className="rounded-[32px] w-full h-14 flex-1 bg-white text-[#636C72] font-normal  outline-none appearance-none text-sm"
              name=""
              id=""
            >
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-4 lg:mt-8">
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>Earliest Departure</span>
            <input
              type="date"
              className="w-full outline-none bg-white"
              name=""
              id=""
            />
            <div className="cursor-pointer absolute right-6 bottom-5">
              <i class="fa-solid fa-calendar"></i>
            </div>
          </div>
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>Earliest Departure</span>
            <input
              type="date"
              className="w-full outline-none bg-white"
              name=""
              id=""
            />
            <div className="cursor-pointer absolute right-6 bottom-5">
              <i class="fa-solid fa-calendar"></i>
            </div>
          </div>
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>No. of Travellers</span>
            <div className="flex w-full gap-5 items-center">
              <select
                className="rounded-[32px] w-full h-6 flex-1 text-[#636C72] font-normal  outline-none appearance-none text-sm bg-white"
                name=""
                id=""
              >
                <option value="">00</option>
              </select>
              <div className="dropBTN cursor-pointer absolute right-6">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 my-6">
        <button
          className="bg-[#6B71B2] w-[186px] h-[60px] rounded-[32px] text-white"
          onClick={() => {
            navigate("/intel-collapsed");
          }}
        >
          Search Flights
        </button>
      </div>
      <hr className="border-gray-400 m-2 my-5" />
    </>
  );
}

export default TravelDetails;
