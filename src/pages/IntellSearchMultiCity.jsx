import React from "react";
import Layout from "./Layout";
import WhereToTravelIntelSearchMultiCity from "../Components/WhereToTravel/WhereToTravelIntelSearchMultiCity";
import TravelDetails from "../Components/Travel Details/TravelDetails";
import Filter from "../Components/Filter/Filter";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";
import FlightDetails3 from "./../Components/FlightDetails/FlightDetails3";
import LoadMoreBtn from "./../Components/Buttons/LoadMoreBtn";

function IntellSearchMultiCity() {
  return (
    <>
      <Layout>
        <WhereToTravelIntelSearchMultiCity />
        <TravelDetails />
        <div className="main-Container w-full flex gap-8 my-6">
          <div className="fliterComponent w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl">
            <Filter />
          </div>
          <div className="cardBox w-3/4 bg-[#DBDDED] rounded-2xl shadowlg px-6">
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
    </>
  );
}

export default IntellSearchMultiCity;
