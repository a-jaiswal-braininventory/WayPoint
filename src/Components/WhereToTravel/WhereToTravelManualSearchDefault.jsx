import React from "react";
import { useNavigate } from "react-router-dom";

function WhereToTravelManualSearchDefault() {
  const navigate = useNavigate();
  return (
    <div className="mainContainer">
      <div>
        <div className="outerBox w-full bg-[#DBDDED] p-8 mt-7 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
            <div className="text-left p-4 text-xl col-span-1 md:col-span-2">
              Where would you like to travel?
            </div>
            {/* <div>Leave a gap for empty space</div> */}
            <div className="bg-white py-4 px-8 rounded-[30px] flex items-center justify-between w-full">
              <label
                htmlFor="travelersno"
                className="text-left whitespace-nowrap"
              >
                No. of Travellers
              </label>
              <select
                name=""
                id="travelersno"
                className="w-1/2 appearance-none outline-none px-2 text-[#636C72] pl-5 text-base"
              >
                <option value="">00</option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <div className="inputAndFlightIcon flex w-full">
              <div className="bg-white py-4 px-8 rounded-[30px] flex items-center w-full xl:w-[92%]">
                <label htmlFor="travelfrom" className="text-left">
                  From
                </label>
                <select
                  name=""
                  id="travelfrom"
                  className="appearance-none outline-none px-2 text-[#636C72] w-full text-base pl-5"
                >
                  <option value="">City, Airport Name or IATA</option>
                </select>
                <div className="dropBTN cursor-pointer">
                  <i className="fa-solid fa-caret-down text-2xl"></i>
                </div>
              </div>
              <p className="xl:flex justify-end items-center hidden xl:w-[8%]">
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
            </div>
            <div className="bg-white py-4 px-8 rounded-[30px] flex gap-3 items-center w-full">
              <label htmlFor="travelto" className="text-left">
                To
              </label>
              <select
                name=""
                id="travelto"
                className="w-full appearance-none outline-none px-2 text-[#636C72] pl-5 text-base "
              >
                <option value="">City, Airport Name or IATA</option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
            <div className="bg-white py-4 px-8 rounded-[30px] flex justify-between items-center w-full">
              <label htmlFor="traveldate" className="text-left">
                Depart
              </label>
              <select
                name=""
                id="traveldate"
                className="w-1/2 appearance-none outline-none px-2 text-[#636C72] pl-5 text-base"
              >
                <option value="">DD/MM/YYYY</option>
              </select>
              <div className="dropBTN cursor-pointer">
                <i className="fa-solid fa-caret-down text-2xl"></i>
              </div>
            </div>
          </div>
          <button
            className="bg-white mt-8 p-4 w-[197px] h-[60px] rounded-[32px] flex justify-center gap-3 mx-auto items-center"
            onClick={() => {
              navigate("/manualsearch-multicity");
            }}
          >
            <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></span>
            <span className="text-lg">Add Flight</span>
          </button>
        </div>
      </div>
      <button
        className="bg-[#6B71B2] rounded-[32px] text-white w-[186px] h-[60px] mt-10"
        onClick={() => {
          navigate("/manual-collapsed");
        }}
      >
        Search Flight
      </button>
      <hr className="border-gray-400 m-2 my-5" />
    </div>
  );
}

export default WhereToTravelManualSearchDefault;
