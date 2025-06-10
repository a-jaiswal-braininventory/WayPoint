import React from "react";
import LogoImg from "../../assets/images/logo/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="top-img"></div>
      <div className="mt-3 md:mt-[50px] px-[20px] md:px-[50px] container mx-auto">
        <div className="header-top outline-none">
          <img
            className="h-[80px] w-[180px] lg:h-[71.02px] lg:w-[260px] cursor-pointer object-contain"
            src={LogoImg}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="header-bottom flex justify-between items-center mt-5 md:mt-[54.25px]">
          <button
            className="back-button text-[#7179BD] flex items-center gap-3 "
            onClick={() => {
              navigate(-1);
            }}
          >
            <span className="rounded-full text-white bg-[#7179BD] w-[44px] h-[44px] flex items-center justify-center cap">
              <i className="fa-solid fa-angle-left text-2xl"></i>
            </span>
            <span className="text-xl font-black">Back</span>
          </button>
          <button className="w-[44px] h-[44px] text-[#7179BD] block">
            <i className="fa-solid fa-circle-user text-4xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
