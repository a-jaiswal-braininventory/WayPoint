import React, { useState } from "react";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import Layout from "./Layout";
import WhereToTravelIntelSearDef from "../Components/WhereToTravel/WhereToTravelIntelSearDef";
import TravelDetails from "../Components/Travel Details/TravelDetails";
import Corousel from "../Components/Corousel/Corousel";

function IntellSearchPageDef() {
  const [searchMode, setSearchMode] = useState("Intelligent");
  return (
    <>
      <Layout>
        <SearchComponent searchMode={searchMode} />
        <WhereToTravelIntelSearDef />
        <TravelDetails />
        <Corousel />
      </Layout>
    </>
  );
}

export default IntellSearchPageDef;
