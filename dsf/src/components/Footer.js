import React from 'react'
import LogoIcon from './LogoIcon';

// Example icons, you can replace with your own icons or another library
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-start">
          {/* Widget 1: Logo and Join Our Community */}
          <div className="w-1/3">
            <LogoIcon w={180} h={80} />
            <p className="mt-2 text-gray-700">Join Our Community</p>
            <div className="flex space-x-2 mt-2">
              <FaFacebook className="text-gray-700 hover:text-gray-900" />
              <FaTwitter className="text-gray-700 hover:text-gray-900" />
              <FaInstagram className="text-gray-700 hover:text-gray-900" />
              <FaLinkedin className="text-gray-700 hover:text-gray-900" />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Insert your email"
                className="p-2 border border-gray-400 rounded w-full"
              />
              <button className="mt-1 bg-gray-700 text-white p-2 rounded w-full">
                Submit
              </button>
            </div>
          </div>

          {/* Widget 2: Menu */}
          <div className="w-1/3 p-10">
            <h3 className="text-gray-700 font-extrabold ">Customer Service</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  How to Buy from Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Credit Terms
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Make an Enquiry
                </a>
              </li>
              <li>
                <a
                  href="/livedeepseacrab"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Request a Call
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  FAQS
                </a>
              </li>
            </ul>
          </div>

          {/* Widget 3: Contact Us and Location */}
          <div className="w-1/3 p-10">
            <h3 className="text-gray-700 font-extrabold">Contact Us</h3>
            <p className="mt-2 text-gray-700">Our Location</p>
            <address className="mt-2 text-gray-700">
              Kengeleni Street,
              <br />
              Kongowea, Mombasa,
              <br />
              Kenya.
            </address>
            <p className="mt-2 text-gray-700">
              <a
                href="mailto:info@diamondseafood.co.ke"
                className="italic text-gray-700 font-black "
              >
                info@diamondseafood.co.ke
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 text-gray-200 py-4 text-center">
        &copy; {new Date().getFullYear()} Diamond Seafood Limited. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer