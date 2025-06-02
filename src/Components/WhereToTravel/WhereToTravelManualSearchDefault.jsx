import React from "react";

function WhereToTravelManualSearchDefault() {
  return (
    <div className="mainContainer">
      <div>
        <div className="outerBox w-full bg-[#DBDDED] p-8 mt-7 rounded-2xl shadow-md">
          <div className="flex gap-5 ">
            <div className="left-Box w-2/3">
              <span className="text-left block mb-4 p-4 text-xl">
                Where would you like to travel?
              </span>
              <div className="left-bottom-box flex mt-4 gap-4">
                <div className="bg-white py-4 px-8 rounded-[30px] w-1/2 flex items-center">
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
                <p className="flex justify-center items-center">
                  <i className="fa-solid fa-plane -rotate-45"></i>
                </p>
                <div className="bg-white py-4 px-8 rounded-[30px] w-1/2 flex gap-3 items-center">
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
              </div>
            </div>
            <div className="right-Box w-1/3 flex flex-col gap-[14px]">
              <div className="bg-white py-4 px-8 rounded-[30px] w-full flex items-center justify-between">
                <label htmlFor="travelersno" className="text-left">
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
              <div className="bg-white py-4 px-8 rounded-[30px] w-full flex justify-between items-center">
                <label htmlFor="travelersno" className="text-left">
                  Depart
                </label>
                <input
                  type="date"
                  className="w-full appearance-none outline-none px-2 text-[#636C72] pl-5 text-lg"
                />
              </div>
            </div>
          </div>
          <button className="bg-white mt-8 p-4 w-[197px] h-[60px] rounded-[32px] flex justify-around mx-auto items-center">
            <span className="block text-2xl">+</span>
            <span className="block text-lg">Add Flight</span>
          </button>
        </div>
      </div>
      <button className="bg-[#6B71B2] rounded-[32px] text-white w-[186px] h-[60px] mt-10">
        Search Flight
      </button>
      <hr className="border-gray-400 m-2 my-5" />
    </div>
  );
}

export default WhereToTravelManualSearchDefault;
