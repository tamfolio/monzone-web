import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarTwo() {
  const [activeMobile, setActiveMobile] = useState(false);

  const activeToggle = () => {
    setActiveMobile(!activeMobile);
  };
  return (
    <div className="w-[100%] h-[10vh] bg-white flex items-center justify-between px-[24px] lg:px-[122px] py-[31px]">
      <div className="flex items-center justify-between gap-[70px]">
        <img src="/assets/logo2.png" alt=""  className="w-[150px] h-[43px] lg:w-[190px] lg:h-[53px]" />
        <div className="lg:flex no-underline no-list-style gap-[30px] hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </div>
      </div>
      <div className="lg:flex gap-[20px] hidden">
        <div className="bg-[#FDB813] w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
          <img src="/assets/apple_logo.png" alt="" />
          <p className="mb-0">Google Play</p>
        </div>
        <div className="bg-[#FDB813] w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
          <img src="/assets/apple_logo.png" alt="" />
          <p className="mb-0">Apple</p>
        </div>
      </div>
      <div
        className="bg-[#FDB813] w-[90px] h-[30px] rounded-[30px] flex items-center justify-center gap-[7px] lg:hidden"
        onClick={activeToggle}
      >
        <p className="mb-0 text-[16px] font-bold text-black">Menu</p>
      </div>
    </div>
  );
}

export default NavbarTwo;
