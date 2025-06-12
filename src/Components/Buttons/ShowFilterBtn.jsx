import React from "react";

function ShowFilterBtn( {setShowFilters}) {
  return (
    <div className="w-/3 mb-7 xl:hidden block justify-center mx-auto">
      <button className="bg-[#6B71B2] hover:bg-[#8188d3] text-white p-5 w-full rounded-3xl font-semibold shadow-lg flex justify-center gap-4" onClick={()=>{setShowFilters(true)}}>
        Show Filters
        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg></span>
      </button>
    </div>
  );
}

export default ShowFilterBtn;
