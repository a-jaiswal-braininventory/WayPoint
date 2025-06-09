import React from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from '../../assets/SVG/Search Icon.svg'

function SearchComponent({ searchMode }) {
  const navigate = useNavigate();

  return (
    <div className="serachFLightWrap mt-[42px] ">
      <div className="headerSearch text-left text-5xl md:text-7xl font-black my-5">
        <h1>Search Flights</h1>
      </div>
      <div className="select-search">
        {searchMode === "Intelligent" ? (
          <div className="Intelligent-search flex items-center justify-between flex-wrap">
            <div className="intelText">
              <h4 className="text-2xl md:text-3xl font-semibold mb-4"> Intelligent Search</h4>
            </div>

            <div className="intelBtns flex flex-wrap md:flex-nowrap items-center gap-4 sm:gap-5">
              <button
                className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px] w-full md:w-[48%]"
                onClick={() => {
                  navigate("/manual-search");
                }}
              >
                <span>
                  <img src={searchIcon} alt="" />
                </span>
                <span className="text-xl font-normal">Go to Manual Search</span>
              </button>

              <button className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px] w-[47.5%] md:w-[24%]">
                <span>
                  <i className="fa-solid fa-clipboard-list text-xl"></i>
                </span>
                <span className="text-xl font-normal">Summary</span>
              </button>

              <button className=" flex item-center gap-4 py-4 px-7 border-black border rounded-[30px] w-[47.5%]  md:w-[28%] ">
                <span>
                  <i className="fa-solid fa-bookmark text-xl"></i>
                </span>
                <span className="text-xl font-normal">Save Trip</span>
              </button>
            </div>

          </div>
        ) : (
          <div className="Manual-search flex flex-wrap items-center justify-between">
            <div className="manualText md:w-[30%]">
              <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-left whitespace-nowrap">Manual Search</h4>
            </div>
            <div className="manualBtns w-full lg:w-[33%] whitespace-nowrap">
              <button
                className=" flex item-center gap-4 py-4 px-7 md:px-5 border-black border rounded-[30px] w-full"
                onClick={() => {
                  navigate("/");
                }}
              >
                <span>
                  <img src={searchIcon} alt="" />
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
