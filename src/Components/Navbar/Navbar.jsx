import React from "react";

function Navbar() {
  return (
    <div className="w-[100%] h-[10vh] bg-[#FDB813] flex items-center justify-between px-[122px] py-[31px]">
      <div className="flex items-center justify-between gap-[70px]">
        <img src="/assets/logo.png" alt="" className="w-[190px] h-[53px]" />
        <div className="flex no-underline no-list-style gap-[30px]">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </div>
      </div>
      <div className="flex gap-[20px]"> 
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

export default Navbar;
