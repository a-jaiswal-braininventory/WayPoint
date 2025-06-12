import React from "react";
import indigoImg from "../../assets/images/indigo.png";

function Flight2() {
  return (
    <div className="w-full sm:w-[48%] lg:w-[31%]">
      <h1 className="mb-2 text-xl">Flight 2</h1>
      <div className="main-box bg-white rounded-xl px-2 py-5 shadow-md">
        <h1 className="text-xl font-normal">Indore (IDR) - Kochi (COX)</h1>
        <h3 className="text-xl font-normal">6h 05m - Direct</h3>
        <hr className="mx-4 my-5 border-gray-400" />
        <div className="filghtDetailsAndImageCOntainer-1 flex w-full">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Indore (IDR)</span>
                <span>
                  <span className="text-base">15:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">3 Oct ‘24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Kochi (COX)</span>
                <span>
                  <span className="text-base">21:15</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">3 Oct ‘24</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="flighDetails-Second-Part w-[40%] flex items-center ps-3 gap-3">
            <div className="flight-icons flex flex-col items-center">
              <p>
                <i className="fa-solid fa-plane -rotate-45"></i>
              </p>
              <div className="borderLine w-[1px] h-[80px] bg-black text-center"></div>
              <p>
                <i className="fa-solid fa-location-dot"></i>
              </p>
            </div>
            <div className="flight-timer">
              <div>6h 05m</div>
              <div className="w-[74px] h-[23px] my-3">
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
      </div>
      <div className="Stay-details bg-white rounded-xl mt-6 py-3 shadow-md">
        <h1 className="text-base">2 days stay in Kochi</h1>
        <h3 className="text-sm">1 Oct ‘24 to 3 Oct ‘24</h3>
      </div>
    </div>
  );
}

export default Flight2;
