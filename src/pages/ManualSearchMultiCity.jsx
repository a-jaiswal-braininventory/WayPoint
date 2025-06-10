import React, { useState } from "react";
import Layout from "./Layout";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WhereToTravelManualSearchMultiCity from "../Components/WhereToTravel/WhereToTravelManualSearchMultiCity";
import Filter from "../Components/Filter/Filter";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";
import FlightDetails3 from "../Components/FlightDetails/FlightDetails3";
import LoadMoreBtn from "../Components/Buttons/LoadMoreBtn";

function ManualSearchMultiCity() {
  const [searchMode, setSearchMode] = useState("manual");
  return (
    <Layout>
      <SearchComponent />
      <WhereToTravelManualSearchMultiCity/>
      <div className="main-Container w-full flex flex-col xl:flex-row xl:gap-4 my-5">
          <div className="fliterComponent xl:w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl mb-6 xlmb-0">
            <Filter/>
          </div>
          <div className="cardBox xl:w-3/4 bg-[#DBDDED] rounded-2xl shadowlg px-4">
            <div className="searchSUmmaryCards w-full block">
              <SearchSummaryCards />
            </div>
            <div className="flightDetailsCard w-full block">
              <FlightDetails3 />
              <FlightDetails3 />
              <FlightDetails3 />
              <FlightDetails3 />
              <LoadMoreBtn />
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default ManualSearchMultiCity;
