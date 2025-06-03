import React from "react";
import sasFLight from "../../assets/images/sasFLight.png";
import indigoImg from "../../assets/images/indigo.png";
import AirIndia from "../../assets/images/AirIndia.png";

function Flight1() {
  return (
    <div className="w-1/3 ">
      <h1 className="mb-2 text-xl">Flight 1</h1>
      <div className="main-box bg-white rounded-xl px-2 py-5 shadow-md ">
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
          <div className="flighDetails-Second-Part w-[40%] flex items-center ps-3 gap-3">
            <div className="flight-icons flex flex-col items-center">
              <p>
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="borderLine md:w-[1px] md:h-[80px] bg-black text-center"></div>
              <p>
                <i className="fa-solid fa-location-dot"></i>
              </p>
            </div>
            <div className="flight-timer">
              <div>29h 50m</div>
              <div className="w-[65.87px] h-[25px] my-3">
                <img
                  src={sasFLight}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>6E 6598</div>
            </div>
          </div>
        </div>
        <div className="StopDetails-1 bg-[#DBDDED] rounded-2xl mt-6 flex justify-between py-4 px-8 mx-4">
          <h1>Stop in Amsterdam (AMS)</h1>
          <h3>2h 50m </h3>
        </div>
        <div className="filghtDetailsAndImageCOntainer-2 flex w-full mt-5">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
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
            <div className="to flex items-center mt-4 ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Mumbai (BOM)</span>
                <span>
                  <span className="text-base">00:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">1 Oct '24</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="flighDetails-Second-Part w-[40%] flex gap-3 items-center ps-3">
            <div className="flight-icons flex flex-col items-center">
              <p>
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="borderLine md:w-[1px] md:h-[80px] bg-black text-center"></div>
              <p>
                <i className="fa-solid fa-location-dot"></i>
              </p>
            </div>
            <div className="flightTimer">
              <div>8h 55m</div>
              <div className="w-[75px] h-[23px] my-3">
                <img
                  src={indigoImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>6E 6598</div>
            </div>
          </div>
        </div>
        <div className="StopDetails-2 bg-[#DBDDED] rounded-2xl mt-6 flex justify-between py-4 px-8 mx-4">
          <h1>Long wait in Mumbai(BOM)</h1>
          <h3>6h 45m </h3>
        </div>
        <div className="filghtDetailsAndImageCOntainer-3 flex w-full mt-5">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Mumbai (BOM)</span>
                <span>
                  <span className="text-base">06:50</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">1 Oct '24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Mumbai (BOM)</span>
                <span>
                  <span className="text-base">08:10</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">1 Oct '24</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="flighDetails-Second-Part w-[40%] flex gap-3 items-center ps-3">
            <div className="flight-icons flex flex-col items-center">
              <p>
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="borderLine md:w-[1px] md:h-[80px] bg-black text-center"></div>
              <p>
                <i className="fa-solid fa-location-dot"></i>
              </p>
            </div>
            <div className="flightTimer">
              <div>1h 20m</div>
              <div className="w-[44.44px] h-[25px] my-3">
                <img
                  src={AirIndia}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>AI 365</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Stay-details bg-white rounded-xl mt-6 py-3 shadow-md">
        <h1 className="text-base">2 days stay in Indore</h1>
        <h3 className="text-sm">1 Oct ‘24 to 3 Oct ‘24</h3>
      </div>
    </div>
  );
}

export default Flight1;
