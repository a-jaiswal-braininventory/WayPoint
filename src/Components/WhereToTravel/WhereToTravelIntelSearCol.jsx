import React from "react";
import clockFilled from "../../assets/SVG/Clock Fill.svg";
import userFilled from "../../assets/SVG/user.svg";

function WhereToTravelIntelSearCol() {
  return (
    <div className="bg-[#DBDDED] rounded-2xl mt-8">
      <div className="WhereToTravelBox p-8">
        <div className="header-BTN flex items-center justify-between">
          <h4 className="text-left text-xl font-semibold">
            Where would you like to travel?
          </h4>
          <span className="expandBtn bg-white h-10 w-10 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
          </span>
        </div>
        <div className="bg-white border rounded-[30px] w-full p-4 flex justify-around mt-3">
          <div className="part-1">
            <span className="mx-2">
              <i className="fa-solid fa-plane -rotate-45"></i>
            </span>
            <input className="w-24" type="text" placeholder="" value='Los-Angeles' />
            <span className="mx-2">
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
            <input className="w-24" type="text" placeholder="" value='Kochi' />
          </div>
          <div className="part-2">
            <span className="mx-2">
              <i className="fa-solid fa-location-dot"></i>
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
              <img src={clockFilled} alt="" className="inline-block" />
            </span>
            <span>8 Days - 15 Days</span>
          </div>
          <div className="part-5">
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

export default WhereToTravelIntelSearCol;
