import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[85%] h-[1px] bg-[#FDB813]"></div>
      <div className="flex items-center justify-between w-[85%] py-[30px]">
        <img src="/assets/logo2.png" alt="" />
        <div className="flex no-underline no-list-style gap-[30px]">
          <li>
            <Link to="/terms&conditions">Terms & Conditions</Link>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Monzone 2024</a>
          </li>
        </div>
        <div className="flex gap-[40px]"> 
          <img src="/assets/twitter.png" alt="" />
          <img src="/assets/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
