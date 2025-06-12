import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TravelDetails() {
  const navigate = useNavigate();

  const departureRef = useRef(null);
  const returnRef = useRef(null);
  const containerRef = useRef(null);
  const [openInput, setOpenInput] = useState(null); // "departure" | "return" | null

  const openDatePicker = (ref, type) => {
    if (openInput === type) {
      setOpenInput(null); // close if already open
      return;
    }
    setOpenInput(type);
    setTimeout(() => {
      ref.current?.showPicker?.();
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenInput(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        className="travelDetailContainer bg-[#DBDDED] rounded-b-2xl pt-4 pb-8 px-5 lg:px-8"
        ref={containerRef}
      >
        <hr className="border-gray-400 mx-2 my-5" />
        <h5 className="heading text-left text-lg lg:text-xl font-semibold">
          Travel Details
        </h5>

        {/* Cities */}
        <div className="departureAndReturn flex flex-col lg:flex-row items-center justify-between mt-8">
          <div className="departure flex items-center bg-white rounded-full px-6 gap-5 lg:w-[48%] w-full relative">
            <span>Departure</span>
            <select className="cursor-pointer rounded-[32px] w-full h-14 flex-1 bg-white text-[#636C72] font-normal outline-none appearance-none text-sm">
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>

          <div className="return flex items-center bg-white rounded-full px-6 gap-5 lg:w-[48%] w-full mt-4 lg:mt-0 relative">
            <span>Return</span>
            <select className="cursor-pointer rounded-[32px] w-full h-14 flex-1 bg-white text-[#636C72] font-normal outline-none appearance-none text-sm">
              <option value="">Enter City</option>
            </select>
            <div className="dropBTN cursor-pointer absolute right-6">
              <i className="fa-solid fa-caret-down text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Dates & Travellers */}
        <div className="grid lg:grid-cols-3 gap-4 mt-4 lg:mt-8">
          {/* Departure Date */}
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>Earliest Departure</span>
            <input
              type="date"
              ref={departureRef}
              className="w-full outline-none bg-white"
              onFocus={() => setOpenInput("departure")}
              onBlur={() => {
                setTimeout(() => {
                  if (openInput === "departure") setOpenInput(null);
                }, 100);
              }}
            />
            <div
              className="cursor-pointer absolute right-6 bottom-5"
              onClick={() => openDatePicker(departureRef, "departure")}
            >
              <i className="fa-solid fa-calendar"></i>
            </div>
          </div>

          {/* Return Date */}
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>Latest Return</span>
            <input
              type="date"
              ref={returnRef}
              className="w-full outline-none bg-white"
              onFocus={() => setOpenInput("return")}
              onBlur={() => {
                setTimeout(() => {
                  if (openInput === "return") setOpenInput(null);
                }, 100);
              }}
            />
            <div
              className="cursor-pointer absolute right-6 bottom-5"
              onClick={() => openDatePicker(returnRef, "return")}
            >
              <i className="fa-solid fa-calendar"></i>
            </div>
          </div>

          {/* Travellers */}
          <div className="rounded-3xl bg-white flex flex-col items-start py-4 px-6 relative">
            <span>No. of Travellers</span>
            <div className="flex w-full gap-5 items-center">
              <select className="cursor-pointer rounded-[32px] w-full h-6 flex-1 text-[#636C72] font-normal outline-none appearance-none text-sm bg-white">
                <option value="">00</option>
              </select>
              <div className="dropBTN cursor-pointer absolute right-6">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center items-center h-20 my-6">
        <button
          className="bg-[#6B71B2] w-[186px] h-[60px] rounded-[32px] text-white hover:bg-[#8188d3]"
          onClick={() => navigate("/intel-collapsed")}
        >
          Search Flights
        </button>
      </div>
      <hr className="border-gray-400 m-2 my-5" />
    </>
  );
}

export default TravelDetails;
