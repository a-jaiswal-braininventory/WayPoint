import React from "react";

function Footer() {
  return (
    <div className="relative w-full">
      <div className="bottom-img"></div>
      <div className="footer w-full sm:p-16 bg-[#7179BD]">
        <div className="flex sm:flex-row  flex-col items-center justify-between container mx-auto">
          <div className="text-white text-xl font-normal py-4 cursor-pointer">
            Terms Of Use
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer">
            Privacy Policy
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer">
            About Us
          </div>
          <div className="text-white text-xl font-normal py-4 cursor-pointer">
            FAQs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
