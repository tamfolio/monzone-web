import React from "react";

function Missions() {
  return (
    <div className="flex flex-col bg-white py-[60px] lg:py-[100px] px-[24px] lg:px-[122px]">
      <h1 className="text-[18px] lg:text-[30px] font-medium w-[381px] lg:w-[830px] text-[#0a0a0a] mb-[100px] leading-[31px]">
        Monzone simplifies banking by providing top-tier financial services for
        both personal and business banking.
        <span className="text-[#535353]">
          With Monzone, you experience financial management like never before,
          along with exceptional support.
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
        <div className="w-[383px] lg:w-[496px]">
          <h1 className="text-[33px] lg:text-[60px] text-center lg:text-start font-bold mb-[30px]">Our Missions</h1>
          <p className="text-[16px] lg:text-[24px] font-medium text-center lg:text-left leading-[28px]">
            We are empowering individuals and businesses by providing essential
            financial tools through accessible, secure, and simplified banking
            experiences, enabling them to thrive and achieve their financial
            goals.
          </p>
        </div>
        <img src="/assets/missions.png" alt="" />
      </div>
    </div>
  );
}

export default Missions;
