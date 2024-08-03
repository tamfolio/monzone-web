import React from "react";

function SectionSeven() {
  return (
    <div className="py-[50px] lg:py-[100px] bg-white flex items-center justify-center">
      <div className="w-[90%] bg-[#FDB813] h-[600px] rounded-[20px] flex items-center justify-end flex-col pt-[50px] px-[24px]">
        <h1 className="text-[45px] lg:text-[60px] font-black mb-[40px] text-center pt-[100px]">Download the app</h1>
        <div className="flex gap-[20px] mb-[40px]">
          <a href='https://play.google.com/store/apps/details?id=com.fintech.monzonecredit' target="blank" className="bg-white w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
           <img src="/assets/google_play_fill.png" alt="" />
            <p className="mb-0">Google Play</p>
          </a>
          <a href='https://apps.apple.com/ng/app/monzone/id6502399515' target="blank" className="bg-white w-[160px] h-[50px] rounded-[30px] flex items-center justify-center gap-[7px]">
            <img src="/assets/apple_logo.png" alt="" />
            <p className="mb-0">Apple</p>
          </a>
        </div>
        <img src="/assets/download.png" alt="" />
      </div>
    </div>
  );
}

export default SectionSeven;
