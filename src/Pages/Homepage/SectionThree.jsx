import React from "react";

function SectionThree() {
  return (
    <div className="bg-[#E9E9E9] flex flex-col lg:flex-row items-center justify-center px-[50px] lg:px-[122px] pt-[40px] lg:pt-[100px] gap-[50px] lg:gap-[100px]">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <span className="text-[30px] lg:text-[60px] font-bold w-[323px] lg:w-[520px] mb-[40px] text-left  hidden lg:block">Your best choice for personal and business banking</span>
        <span className="text-[30px] lg:text-[60px] font-bold w-[323px] lg:w-[520px] mb-[40px] text-center  block lg:hidden">Your best choice for personal and business banking</span>
        <p className="text-[18px] w-[323px] lg:w-[458px] mb-[40px] text-left">
          Payments, invoices, savings, loans, terminals... everything you
          need.
        </p>
        <div>
          <div className="flex gap-[20px]">
            <div className="bg-[#FDB813] w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
              <img src="/assets/apple_logo.png" alt="" />
              <p className="mb-0 font-semibold">Google Play</p>
            </div>
            <div className="bg-[#FDB813] w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
              <img src="/assets/apple_logo.png" alt="" />
              <p className="mb-0 font-semibold">Apple</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/assets/model.png" alt="" />
      </div>
    </div>
  );
}

export default SectionThree;
