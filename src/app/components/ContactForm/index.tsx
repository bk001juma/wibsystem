"use client";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phnumber: "",
    Message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="scroll-mt-14">
      <div className="container">
        <div className="relative">
          <h2 className="mb-9 capitalize">Get in Touch</h2>
          <div className="relative border border-lightblue/35 px-6 py-2 rounded-2xl">
            <form
              action="https://formsubmit.co/el/dowina"
              method="POST"
              className="flex flex-wrap w-full m-auto justify-between"
            >
              {/* Visible inputs */}
              <div className="sm:flex gap-6 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="fname"
                    className="pb-3 inline-block text-base text-lightpurple"
                  >
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full text-base px-4 rounded-2xl py-2.5 border-lightblue/35 border transition-all duration-500 focus:border-primary focus:outline-0 placeholder:text-lightsky/40 text-white"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="lname"
                    className="pb-3 inline-block text-base text-lightpurple"
                  >
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    className="w-full text-base px-4 rounded-2xl py-2.5 border-lightblue/35 border transition-all duration-500 focus:border-primary focus:outline-0 placeholder:text-lightsky/40 text-white"
                  />
                </div>
              </div>

              {/* Other inputs */}
              <div className="sm:flex gap-6 w-full">
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="email"
                    className="pb-3 inline-block text-base text-lightpurple"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    required
                    className="w-full text-base px-4 rounded-2xl py-2.5 border-lightblue/35 border transition-all duration-500 focus:border-primary focus:outline-0 placeholder:text-lightsky/40 text-white"
                  />
                </div>
                <div className="mx-0 my-2.5 flex-1">
                  <label
                    htmlFor="Phnumber"
                    className="pb-3 inline-block text-base text-lightpurple"
                  >
                    Phone Number
                  </label>
                  <input
                    id="Phnumber"
                    type="tel"
                    name="phnumber"
                    value={formData.phnumber}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    required
                    className="w-full text-base px-4 rounded-2xl py-2.5 border-lightblue/35 border transition-all duration-500 focus:border-primary focus:outline-0 placeholder:text-lightsky/40 text-white"
                  />
                </div>
              </div>

              <div className="w-full mx-0 my-2.5 flex-1">
                <label
                  htmlFor="message"
                  className="text-base inline-block text-lightpurple"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Anything else you wanna communicate"
                  required
                  className="w-full mt-2 rounded-2xl px-5 py-3 border-lightblue/35 border transition-all duration-500 focus:border-primary focus:outline-0 placeholder:text-lightsky/40 text-white"
                ></textarea>
              </div>

              {/* Hidden inputs for FormSubmit */}
              <input type="hidden" name="Name" value={formData.firstname} />
              <input type="hidden" name="LastName" value={formData.lastname} />
              <input type="hidden" name="Email" value={formData.email} />
              <input type="hidden" name="PhoneNo" value={formData.phnumber} />
              <input type="hidden" name="Message" value={formData.Message} />

              <div className="mx-0 my-2.5 w-full">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`border leading-none px-6 text-lg font-medium py-4 rounded-full 
        ${
          !isFormValid
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer"
        }`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
