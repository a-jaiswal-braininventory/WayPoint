import React, { useState } from "react";
import Layout from "./Layout";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WhereToTravelIntelSearCol from "../Components/WhereToTravel/WhereToTravelIntelSearCol";
import Filter from "../Components/Filter/Filter";
import FlightDetails2 from "../Components/FlightDetails/FlightDetails2";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";
import LoadMoreBtn from "../Components/Buttons/LoadMoreBtn";
import ShowFilterBtn from "../Components/Buttons/ShowFilterBtn";

function IntellSearchPageCol() {
  const [searchMode, setSearchMode] = useState("Intelligent");
  const [showFilters, setShowFilters] = useState(false);
  return (
    <>
      {!showFilters && (
        <Layout>
          <SearchComponent searchMode={searchMode} />
          <WhereToTravelIntelSearCol />
          <hr className="border-gray-400 my-9" />
          <div className="main-Container w-full flex flex-col xl:flex-row xl:gap-4 my-5">
            <div className="fliterComponent hidden xl:block xl:w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl mb-6 xl:mb-0">
              <Filter />
            </div>

            {!showFilters && <ShowFilterBtn setShowFilters={setShowFilters} />}

            <div className="cardBox xl:w-3/4 bg-[#DBDDED] rounded-2xl shadow-lg px-4">
              <div className="searchSUmmaryCards w-full block">
                <SearchSummaryCards />
              </div>
              <div className="flightDetailsCard w-full block">
                <FlightDetails2 />
                <FlightDetails2 />
                <FlightDetails2 />
                <FlightDetails2 />
                <LoadMoreBtn />
              </div>
            </div>
          </div>
        </Layout>
      )}

      {showFilters && (
        <div className="block xl:hidden w-5/6 mx-auto bg-white border-[1px] border-[#6B71B2] rounded-2xl my-6">
          <Filter setShowFilters={setShowFilters} />
        </div>
      )}
    </>
  );
}

export default IntellSearchPageCol;
