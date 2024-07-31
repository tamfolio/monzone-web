import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[85%] h-[1px] bg-[#FDB813]"></div>
      <div className="lg:flex items-center justify-between w-[85%] py-[30px] hidden">
        <img src="/assets/logo2.png" alt="" />
        <div className="flex no-underline no-list-style gap-[30px]">
          <li>
            <Link to="/terms_of_use" onClick={handleLinkClick}>Terms of Use</Link>
          </li>
          <li>
            <Link to="/privacy_policy" onClick={handleLinkClick}>Privacy Policy</Link>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">&#169; Monzone, 2024</a>
          </li>
        </div>
        <div className="flex gap-[40px]">
          <img src="/assets/twitter.png" alt="" />
          <img src="/assets/linkedin.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:hidden items-start justify-between w-[100%] py-[30px] px-[26px]">
        <img src="/assets/logo2.png" alt="" />
        <div className="flex items-center justify-between w-[100%]">
          <div className="flex flex-col no-underline no-list-style gap-[20px] mt-[30px]">
            <li>
              <Link to="/terms_of_use" onClick={handleLinkClick}>Terms of Use</Link>
            </li>
            <li>
            <Link to="/privacy_policy" onClick={handleLinkClick}>Privacy Policy</Link>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">&#169; Monzone, 2024</a>
            </li>
          </div>
          <div className="flex gap-[40px]">
            <img src="/assets/twitter.png" alt="" />
            <img src="/assets/linkedin.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
