import React from "react";

function ContactUs() {
  return (
    <div className="bg-white py-[100px] flex items-start justify-center gap-[140px] px-[122px]">
      <div className="w-[271px]">
        <h1 className="text-[40px] text-[#0a0a0a] font-bold mb-[40px]">
          Questions? We're here to help!
        </h1>
        <p className="text-[#535353]">
          Contact Monzone directly at{" "}
          <span className="text-[#0a0a0a] underline">
            hello@monzonecredit.com
          </span>
        </p>
      </div>
      <div className="flex gap-[90px] w-[700px] flex-wrap">
        <div className="flex flex-col">
          <label for="firstName">First Name</label>
          <input
            type="text"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="LasttName">Last Name</label>
          <input
            type="text"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="message">Message</label>
          <input
            type="textarea"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[690px] mb-[50px]"
          />
        </div>
        <button className="w-[160px] h-[50px] bg-[#FDB813] font-bold rounded-[30px] ">Submit</button>
      </div>
    </div>
  );
}

export default ContactUs;
