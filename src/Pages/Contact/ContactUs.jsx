import React from "react";

function ContactUs() {
  return (
    <div className="bg-white py-[50px] lg:py-[100px] flex flex-col lg:flex-row items-start justify-center gap-[60px] lg:gap-[140px] px-[24px] lg:px-[122px] w-[100%]">
      <div className="w-[100%] lg:w-[281px] flex items-center justify-center flex-col">
        <h1 className="text-[30px] lg:text-[40px] text-[#0a0a0a] font-bold mb-[20px] lg:mb-[40px] text-center lg:text-left">
          Questions? We're here to help!
        </h1>
        <p className="text-[#535353] text-center mb-0">
          Contact Monzone directly at{" "}
          <span className="text-[#0a0a0a] underline">
            hello@monzonecredit.com
          </span>
        </p>
      </div>
      <div className="flex gap-[90px] min-w-[300px] lg:min-w-[500px] lg:w-[700px] flex-wrap">
        <div className="flex flex-col">
          <label for="firstName">First Name</label>
          <input
            type="text"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 min-w-[350px] lg:w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="LasttName">Last Name</label>
          <input
            type="text"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 min-w-[350px] lg:w-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="message">Message</label>
          <input
            type="textarea"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[382px] lg:w-[690px] mb-[50px]"
          />
        </div>
        <button className="w-[160px] h-[50px] bg-[#FDB813] font-bold rounded-[30px] ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
