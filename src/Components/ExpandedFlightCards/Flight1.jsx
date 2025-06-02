import React from "react";

function Flight1() {
  return (
    <div className="w-1/3 ">
      <h1 className="mb-2 text-xl">Flight 1</h1>
      <div className="main-box bg-white rounded-xl px-2 py-4 font-normal">
        <h1 className="text-xl font-normal">
          Los Angeles (LAX) - Indore (IDR)
        </h1>
        <h3 className="text-xl font-normal">29h 50m - 2 Stops</h3>
        <hr className="mx-4 my-5 border-gray-400" />
        <div className="filghtDetailsAndImageCOntainer-1 flex w-full">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Los Angeles (LAX)</span>
                <span>
                  <span className="text-base">13:50</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">29 Sep '24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Amsterdam (AMS)</span>
                <span>
                  <span className="text-base">09:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">30 Sep '24</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="flighDetails-Second-Part w-[40%]">Hello World</div>
        </div>
      </div>
    </div>
  );
}

export default Flight1;
