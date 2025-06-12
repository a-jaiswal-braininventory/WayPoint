import React, { useState } from "react";
import Layout from "./Layout";
import WhereToTravelIntelSearchMultiCity from "../Components/WhereToTravel/WhereToTravelIntelSearchMultiCity";
import TravelDetails from "../Components/Travel Details/TravelDetails";
import Filter from "../Components/Filter/Filter";
import SearchSummaryCards from "../Components/SearchSummaryCard/SearchSummaryCards";
import FlightDetails3 from "./../Components/FlightDetails/FlightDetails3";
import LoadMoreBtn from "./../Components/Buttons/LoadMoreBtn";
import ShowFilterBtn from "../Components/Buttons/ShowFilterBtn";

function IntellSearchMultiCity() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div>
        {!showFilters && (
          <Layout>
            <WhereToTravelIntelSearchMultiCity />
            <TravelDetails />
            <div className="main-Container w-full flex flex-col xl:flex-row xl:gap-4 my-5">
              <div className="fliterComponent hidden xl:block xl:w-1/4 bg-white border-[1px] border-[#6B71B2] rounded-2xl mb-6 xl:mb-0">
                <Filter />
              </div>

              {!showFilters && (
                <ShowFilterBtn setShowFilters={setShowFilters} />
              )}

              <div className="cardBox xl:w-3/4 bg-[#DBDDED] rounded-2xl shadowlg px-4">
                <div className="searchSUmmaryCards w-full block">
                  <SearchSummaryCards />
                </div>
                <div className="flightDetailsCard w-full block">
                  <FlightDetails3 />
                  <FlightDetails3 />
                  <FlightDetails3 />
                  <FlightDetails3 />
                  <FlightDetails3 />
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
      </div>
    </>
  );
}

export default IntellSearchMultiCity;
