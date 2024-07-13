import React from "react";
import { Link } from "react-router-dom";

function MobileMenu({activeToggle}) {
  return (
    <div className="relative z-10 w-[100%] h-[100vh] bg-[#FDB813] flex flex-col items-center justify-start">
      <div className="flex flex-col no-underline no-list-style gap-[30px] items-center justify-center mt-[50px]">
        <li>
          <Link to="/" className="text-[32px] font-bold" onClick={activeToggle}>Home</Link>
        </li>
        <li>
          <Link to="/about-us" className="text-[32px] font-bold" onClick={activeToggle}>About</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-[32px] font-bold" onClick={activeToggle}>Contact</Link>
        </li>
        <li>
          <Link to="/faq" className="text-[32px] font-bold" onClick={activeToggle}>FAQ</Link>
        </li>
      </div>
      <div className="flex gap-[20px] mt-[60px]">
          <div className="bg-white w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
            <img src="/assets/apple_logo.png" alt="" />
            <p className="mb-0">Google Play</p>
          </div>
          <div className="bg-white w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
            <img src="/assets/apple_logo.png" alt="" />
            <p className="mb-0">Apple</p>
          </div>
        </div>
    </div>
  );
}

export default MobileMenu;
