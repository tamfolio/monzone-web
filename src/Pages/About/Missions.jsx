import React from "react";

function Missions() {
  return (
    <div className="flex flex-col bg-white py-[100px] px-[122px]">
      <h1 className="text-[30px] font-medium w-[830px] text-[#0a0a0a] mb-[100px]">
        Monzone simplifies banking by providing top-tier financial services for
        both personal and business banking.
        <span className="text-[#535353]">
          With Monzone, you experience financial management like never before,
          along with exceptional support.
        </span>
      </h1>
      <div className="flex items-center justify-between gap-[50px]">
        <div className="w-[496px]">
          <h1 className="text-[60px] font-bold">Our Missions</h1>
          <p className="text-[24px] font-medium">
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
