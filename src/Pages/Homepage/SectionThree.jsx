import React from "react";

function SectionThree() {
  return (
    <div className="bg-[#E9E9E9] flex items-center justify-center px-[122px] pt-[100px] gap-[100px]">
      <div>
        <h1 className="text-[60px] font-bold w-[520px] mb-[40px]">Your best choice for personal and business banking</h1>
        <p className="text-[18px] w-[458px] mb-[40px]">
          'Payments, invoicing, savings, loans, terminals... everything you
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
