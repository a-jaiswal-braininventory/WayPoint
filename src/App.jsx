import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/NoPage";
import IntellSearchPageDef from "./pages/IntellSearchPageDef";
import IntellSearchPageCol from "./pages/IntellSearchPageCol";
import IntellSearchMultiCity from "./pages/IntellSearchMultiCIty";
import ManualSearchDef from "./pages/ManualSearchDef";
import ManualSearchCol from "./pages/ManualSearchCol";
import ManualSearchMultiCity from "./pages/ManualSearchMultiCity";
import ExpandedFlightCard from "./pages/ExpandedFlightCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntellSearchPageDef />} />
        <Route path="/intel-collapsed" element={<IntellSearchPageCol />} />
        <Route path="/intelsearch-multicity" element={<IntellSearchMultiCity />} />
        <Route path="/manual-search" element={<ManualSearchDef />} />
        <Route path="manual-collapsed" element={<ManualSearchCol/>} />
        <Route path="/manualsearch-multicity" element={<ManualSearchMultiCity/>} />
        <Route path="/expanded-flight-card" element={<ExpandedFlightCard/>}/>
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
