import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recaptchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    // Handle form submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-7">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-7xl">
        <h1 className="text-5xl font-thin text-black mb-8">
          Let's Get Started
        </h1>
        <p className="text-gray-700 mb-6">
          Fill out the form or use the contact information below to contact the
          Crab Wholesale team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Details Widget */}
          <div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-black">
                Domestic Wholesale Sales
              </h2>
              <p className="text-gray-700">
                Phone:{" "}
                <span className="text-black font-medium">888.353.9898</span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:sales@diamondseafood.co.ke"
                  className="text-blue-500"
                >
                  sales@diamondseafood.co.ke
                </a>
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-black">
                International Wholesale Sales
              </h2>
              <p className="text-gray-700">
                Phone:{" "}
                <span className="text-black font-medium">+34633 267 778</span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:intlsales@diamondseafood.co.ke"
                  className="text-blue-500"
                >
                  intlsales@diamondseafood.co.ke
                </a>
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-black">
                Accounts Receivable
              </h2>
              <p className="text-gray-700">
                Phone:{" "}
                <span className="text-black font-medium">
                  888.353.9898 x226
                </span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:ar@diamondseafood.co.ke"
                  className="text-blue-500"
                >
                  ar@diamondseafood.co.ke
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Shipping</h2>
              <p className="text-gray-700">
                Phone:{" "}
                <span className="text-black font-medium">
                  888.353.9898 x216
                </span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:sales@diamondseafood.co.ke"
                  className="text-blue-500"
                >
                  sales@diamondseafood.co.ke
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form Widget */}
          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 ">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="text"
                placeholder="Company"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                rows="4"
              ></textarea>
              <select className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Word of Mouth</option>
                <option>Other</option>
              </select>
              <div className="flex items-center justify-left pt-2">
                <ReCAPTCHA
                  sitekey="6Lf4C7ApAAAAAMAMZt1-Xw_dCrgKfgtgtr2w1be1"
                  onChange={handleRecaptchaChange}
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 mt-4"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
