import React from "react";

function Footer() {
  return (
    <div className="relative w-full">
      <div className="bottom-img"></div>
      <div className="footer w-full sm:p-16 bg-[#7179BD]">
        <div className="flex sm:flex-row  flex-col items-center justify-between container mx-auto">
          <div className="text-white text-xl font-normal py-4 cursor-pointer hover:text-gray-200">
            Terms Of Use
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer hover:text-gray-200">
            Privacy Policy
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer hover:text-gray-200">
            About Us
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer hover:text-gray-200">
            FAQs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
