import React from "react";
import { useNavigate } from "react-router-dom";

function SearchComponent({ searchMode }) {
  const navigate = useNavigate();

  return (
    <div className="serachFLightWrap mt-[42px] ">
      <div className="headerSearch text-left text-7xl font-black">
        <h1>Search Flights</h1>
      </div>
      <div className="select-search">
        {searchMode === "Intelligent" ? (
          <div className="Intelligent-search flex items-center justify-between">
            <div className="intelText">
              <h4 className="text-3xl font-semibold"> Intelligent Search</h4>
            </div>
            <div className="intelBtns flex items-center gap-5">
              <button
                className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px]"
                onClick={() => {
                  navigate("/manual-search");
                }}
              >
                <span>
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </span>
                <span className="text-xl font-normal">Go to Manual Search</span>
              </button>
              <button className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px] ">
                <span>
                  <i className="fa-solid fa-clipboard-list text-xl"></i>
                </span>
                <span className="text-xl font-normal">Summary</span>
              </button>
              <button className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px] ">
                <span>
                  <i className="fa-solid fa-bookmark text-xl"></i>
                </span>
                <span className="text-xl font-normal">Save Trip</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="Manual-search flex items-center justify-between">
            <div className="manualText">
              <h4 className="text-3xl font-semibold">Manual Search</h4>
            </div>
            <div className="manualBtns">
              <button
                className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px]"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </span>
                <span className="text-xl font-normal">
                  Go to Intelligent Search
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
