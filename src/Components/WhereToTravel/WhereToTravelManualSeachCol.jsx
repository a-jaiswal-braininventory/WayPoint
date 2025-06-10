import React from "react";
import userFilled from "../../assets/SVG/user.svg";
import flightFilled from "../../assets/SVG/AirplaneInFlight Fill.svg";

function WhereToTravelManualSeachCol() {
  return (
    <div className="bg-[#DBDDED] rounded-2xl mt-8">
      <div className="WhereToTravelBox px-5 lg:px-8 py-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-xl font-semibold">
            Where would you like to travel?
          </h4>
          <span className="expandBtn bg-white h-10 w-10 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          </span>
        </div>
        <div className="bg-white border rounded-[30px] w-full p-4 flex flex-col lg:flex-row items-start justify-around mt-3 gap-3">
          <div className="part-1">  
            <span className="mx-2">
              <i className="fa-solid fa-plane -rotate-45"></i>
            </span>
            <input
              className="w-32"
              type="text"
              placeholder=""
              value="Los-Angeles(LAX)"
            />
            <span className="mx-2">
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
            <input
              className="w-24"
              type="text"
              placeholder=""
              value="Indore (IDR)"
            />
          </div>
          <div className="part-2">
            <span className="mx-2">
              <img src={flightFilled} alt="" className="inline-block" />
            </span>
            <span>1 City</span>
          </div>
          <div className="part-3">
            <span className="mx-2">
              <i className="fa-solid fa-calendar-week"></i>
            </span>
            <span>Wed, 11 Sep ‘24 - Mon, 30 Sep ‘24</span>
          </div>
          <div className="part-4">
            <span className="mx-2">
              <img src={userFilled} alt="" className="inline-block" />
            </span>
            <span>4 Travellers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereToTravelManualSeachCol;
