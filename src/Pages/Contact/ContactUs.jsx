import React, { useState, useEffect } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Validate the form fields
    const isFormValid =
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && // Email validation
      formData.message.trim() !== "";

    setIsValid(isFormValid);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      emailaddress: formData.email,
      firstname: formData.firstName,
      lastname: formData.lastName,
      message: formData.message,
    };

    try {
      const response = await fetch("https://mobile-api.monzonecredit.com/api/misc/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data);
        alert("Email sent successfully!");
        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error sending email:", data);
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      <form
        className="flex gap-[90px] min-w-[300px] lg:min-w-[500px] lg:w-[700px] flex-wrap"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-5">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 min-w-[315px] lg:w-[300px]"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 min-w-[315px] lg:w-[300px]"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[382px] lg:w-[690px] mb-[50px]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <input
            type="textarea"
            name="message"
            className="border-b border-gray-400 focus:border-gray-800 focus:outline-none py-2 px-3 text-gray-700 w-[382px] lg:w-[690px] mb-[50px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={`w-[160px] h-[50px] bg-[#FDB813] font-bold rounded-[30px] ${!isValid || loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!isValid || loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
