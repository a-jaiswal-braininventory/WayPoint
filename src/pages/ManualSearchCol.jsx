import React, { useState } from "react";
import Layout from "./Layout";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WhereToTravelManualSeachCol from "../Components/WhereToTravel/WhereToTravelManualSeachCol";
import LoadMoreBtn from "../Components/Buttons/LoadMoreBtn";
import FlightDetails1 from "../Components/FlightDetails/FlightDetails1";
import Filter from "../Components/Filter/Filter";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";

function ManualSearchCol() {
  const [searchMode, setSearchMode] = useState("manual");

  return (
    <Layout>
      <SearchComponent searchMode={searchMode} />
      <WhereToTravelManualSeachCol/>
      <hr className="my-8 border-gray-400" />
       <div className="main-Container w-full flex gap-8 my-5">
          <div className="fliterComponent w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl">
            <Filter />
          </div>
          <div className="cardBox w-3/4 bg-[#DBDDED] rounded-2xl shadow-lg px-6">
            <div className="searchSUmmaryCards w-full block">
              <SearchSummaryCards />
            </div>
            <div className="flightDetailsCard w-full block">
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <FlightDetails1/>
              <LoadMoreBtn/>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default ManualSearchCol;
