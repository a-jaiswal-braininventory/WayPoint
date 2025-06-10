import React from "react";
import VistaraImage from "../../assets/images/vistaraImg.png";
import IndigoImage from "../../assets/images/indigo.png";
import airIndiaImage from "../../assets/images/AirIndia.png";
import SasImage from "../../assets/images/sasFLight.png";

function Flight3() {
  return (
    <div className="w-full sm:w-[48%] lg:w-[31%] ">
      <h1 className="mb-2 text-xl">Flight 3</h1>
      <div className="main-box bg-white rounded-xl px-2 py-5 shadow-md">
        <h1 className="text-xl font-normal">Kochi (COX) - Los Angeles (LAX)</h1>
        <h3 className="text-xl font-normal">32h 09m - 3 Stops</h3>
        <hr className="mx-4 my-5 border-gray-400" />
        <div className="filghtDetailsAndImageCOntainer-1 flex w-full">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Kochi (COX)</span>
                <span>
                  <span className="text-base">17:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">5 Oct ‘24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Banglore (BLR)</span>
                <span>
                  <span className="text-base">18:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">5 Oct '24</span>
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
              <div>1h 00m</div>
              <div className="w-[55.1px] h-[45px] my-3">
                <img
                  src={VistaraImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>6E 6598</div>
            </div>
          </div>
        </div>
        <div className="StopDetails-1 bg-[#DBDDED] rounded-2xl mt-6 flex justify-between py-4 px-8 mx-4">
          <h1>Stop in Bangalore (BLR)</h1>
          <h3>2h 50m </h3>
        </div>
        <div className="filghtDetailsAndImageCOntainer-2 flex w-full mt-5">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Banglore (BLR)</span>
                <span>
                  <span className="text-base">20:55</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">5 Oct ‘24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Delhi (DEL)</span>
                <span>
                  <span className="text-base">23:55</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">5 Oct '24</span>
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
              <div>3h 00m</div>
              <div className="w-[74px] h-[23px] my-3">
                <img
                  src={IndigoImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>6E 6598</div>
            </div>
          </div>
        </div>
        <div className="StopDetails-2 bg-[#DBDDED] rounded-2xl mt-6 flex justify-between py-4 px-8 mx-4">
          <h1>Stop in Delhi (DEL)</h1>
          <h3>4h 00m </h3>
        </div>
        <div className="filghtDetailsAndImageCOntainer-3 flex w-full mt-5">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>IN</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Delhi (DEL)</span>
                <span>
                  <span className="text-base">03:05</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">6 Oct ‘24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">San Francisco (SFO)</span>
                <span>
                  <span className="text-base">18:40</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">6 Oct '24</span>
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
              <div>15h 35m</div>
              <div className="w-[44.44px] h-[25px] my-3">
                <img
                  src={airIndiaImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>6E 6598</div>
            </div>
          </div>
        </div>
        <div className="StopDetails-3 bg-[#DBDDED] rounded-2xl mt-6 flex justify-between py-4 px-8 mx-4">
          <h1>Stop in San Francisco (SFO</h1>
          <h3>4h 16m </h3>
        </div>
        <div className="filghtDetailsAndImageCOntainer-3 flex w-full mt-5">
          <div className="flightDetails-first-part w-[60%]">
            <div className="from flex items-center ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">San Francisco (SFO)</span>
                <span>
                  <span className="text-base">22:56</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">6 Oct ‘24</span>
                </span>
              </h5>
            </div>
            <div className="to flex items-center mt-4 ps-4">
              <p>US</p>
              <h5 className="grid justify-start border-s border-s-black ps-3 ml-3">
                <span className="text-base">Los Angeles (LAX)</span>
                <span>
                  <span className="text-base">12:44</span>
                  <span className="ms-2 me-2 border border-l-black"></span>
                  <span className="text-base">6 Oct '24</span>
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
              <div>6h 05m</div>
              <div className="w-[65.87px] h-[25px] my-3">
                <img
                  src={SasImage}
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
        <h1 className="text-base">2 days stay in Los Angeles</h1>
        <h3 className="text-sm">6 Oct ‘24 to 8 Oct ‘24</h3>
      </div>
    </div>
  );
}

export default Flight3;
