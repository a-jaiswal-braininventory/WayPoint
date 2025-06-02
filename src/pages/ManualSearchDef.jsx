import React, { useState } from "react";
import Layout from "./Layout";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import WhereToTravelManualSearchDefault from "../Components/WhereToTravel/WhereToTravelManualSearchDefault";
import Corousel from "../Components/Corousel/Corousel";

function ManualSearchDef() {
  const [searchMode, setSearchMode] = useState("Manual");
  return (
    <Layout>
      <SearchComponent searchMode={searchMode} />
      <WhereToTravelManualSearchDefault />
      <Corousel />
    </Layout>
  );
}

export default ManualSearchDef;
