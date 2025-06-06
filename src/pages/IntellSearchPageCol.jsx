import React, { useState } from "react";
import Layout from "./Layout";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WhereToTravelIntelSearCol from "../Components/WhereToTravel/WhereToTravelIntelSearCol";
import Filter from "../Components/Filter/Filter";
import FlightDetails2 from "../Components/FlightDetails/FlightDetails2";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";
import LoadMoreBtn from "../Components/Buttons/LoadMoreBtn";

function IntellSearchPageCol() {
  const [searchMode, setSearchMode] = useState("Intelligent");
  return (
    <>
      <Layout>
        <SearchComponent searchMode={searchMode} />
        <WhereToTravelIntelSearCol />
        <hr className="border-gray-400 my-9" />
        <div className="main-Container w-full flex gap-8 my-5">
          <div className="fliterComponent w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl">
            <Filter />
          </div>
          <div className="cardBox w-3/4 bg-[#DBDDED] rounded-2xl shadow-lg px-6">
            <div className="searchSUmmaryCards w-full block">
              <SearchSummaryCards />
            </div>
            <div className="flightDetailsCard w-full block">
              <FlightDetails2 />
              <FlightDetails2 />
              <FlightDetails2 />
              <FlightDetails2 />
              <LoadMoreBtn/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IntellSearchPageCol;
