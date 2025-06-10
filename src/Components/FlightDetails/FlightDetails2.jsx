import React from "react";
import IndigoIMG from "../../assets/images/indigo.png";
import { useNavigate } from "react-router-dom";

function FlightDetails2() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flight-detailsCard flex lg:flex-row flex-col shadow-md rounded-2xl overflow-hidden mb-6">
        <div className="details lg:w-[80%] flex-1 shrink flex flex-col gap-6 lg:p-8 py-8 px-2 bg-white">
          <div className="flight1 flex items-center flex-1">
            <div className="block-1 lg:flex w-30 gap-5 hidden">
              <div>
                <img
                  className="w-[74px] h-[23px] object-cover"
                  src={IndigoIMG}
                  alt=""
                />
              </div>
              <div className="px-2 text-base">US</div>
            </div>
            <div className="block-2 flex flex-1 justify-between">
              <h5 className="block2A grid justify-start lg:border-s lg:border-s-black ps-2 lg:ps-3 w-1/3">
                <span className="text-base lg:text-xl">Los Angeles (LAX)</span>
                <span>
                  <span className="text-sm lg:text-base">13:50</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-sm lg:text-base">29 Sep '24</span>
                </span>
              </h5>
              <div className="block2B lg:w-1/3">
                <p className="text-xs lg:text-sm">29h 50m</p>
                <div className="flex items-center justify-center relative">
                  <p>
                    <i className="fa-solid fa-plane -rotate-45"></i>
                  </p>
                  <p className="border-parent">
                    <span className="border-main"></span>
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>
                <p className="text-xs lg:text-sm">2 stops (AMS ; BOM)</p>
              </div>
              <h5 className="block2C grid justify-end lg:border-e lg:border-e-black pe-2 lg:pe-3 w-1/3">
                <span className="lg:text-xl">Indore (IDR)</span>
                <span>
                  <span className="text-sm lg:text-base">08:10</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-sm lg:text-base">1 Oct '24</span>
                </span>
              </h5>
            </div>
            <div className="block-3 lg:flex w-8 hidden">
              <div className="ps-3">IN</div>
            </div>
          </div>
          <div className="flight2 flex items-center flex-1">
            <div className="block-1 lg:flex w-30 gap-5 hidden">
              <div>
                <img
                  className="w-[74px] h-[23px] object-cover"
                  src={IndigoIMG}
                  alt=""
                />
              </div>
              <div className="px-2 text-base">IN</div>
            </div>
            <div className="block-2 flex flex-1 justify-between">
              <h5 className="block2A grid justify-start lg:border-s lg:border-s-black ps-2 lg:ps-3 w-1/3">
                <span className="text-base lg:text-xl">Indore (IDR)</span>
                <span>
                  <span className="text-sm lg:text-base">15:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-sm lg:text-base">3 Oct '24</span>
                </span>
              </h5>
              <div className="block2B lg:w-1/3">
                <p className="text-xs lg:text-sm">01h 00m</p>
                <div className="flex items-center justify-center relative">
                  <p>
                    <i className="fa-solid fa-plane -rotate-45"></i>
                  </p>
                  <p className="border-parent flight-2">
                    <span className="border-main"></span>
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>
                <p className="text-xs lg:text-sm">1 stop (DEL)</p>
              </div>
              <h5 className="block2C grid justify-end lg:border-e lg:border-e-black pe-2 lg:pe-3 w-1/3">
                <span className="lg:text-xl">Kochi (COK)</span>
                <span>
                  <span className="ttext-sm lg:text-base">21:15</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-sm lg:text-base">3 Oct '24</span>
                </span>
              </h5>
            </div>
            <div className="block-3 lg:flex w-8 hidden">
              <div className="ps-3 ">IN</div>
            </div>
          </div>
        </div>
        <div className="book-Flight lg:w-[20%] bg-[#6B71B2]">
          <div className="flex lg:flex-col gap-3 items-center justify-around pt-10 pb-6 px-4 lg:p-6 w-full h-full relative ">
            <button
              className="absolute top-4 right-4"
              onClick={() => {
                navigate("/expanded-flight-card");
              }}
            >
              <span className="expandBtn bg-white h-7 w-7 lg:h-10 lg:w-10 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
              </span>
            </button>
            <div className="text-2xl font-semibold text-white">$758</div>
            <button className="rounded-[32px] bg-white py-3 px-10">Book</button>
            <div className="text-xl font-normal text-white">51h 35m</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails2;
