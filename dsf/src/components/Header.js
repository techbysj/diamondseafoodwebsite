// Header.js
import React, { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-200 z-10 relative">
      <div className="container mx-auto flex justify-between items-center p-3">
        <Logo w={180} h={80} />
        <nav>
          <ul className="flex space-x-4 text-left z-10 ">
            <li>
              <a
                href="/"
                className="text-gray-700  bg-gray-100 text-xl hover:text-gray-900 rounded-md hover:bg-gray-300 p-3 font-thin"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-700  bg-gray-100 text-xl hover:text-gray-900 rounded-md hover:bg-gray-300 p-3 font-thin"
              >
                About
              </a>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a
                href="/"
                className="text-gray-700  bg-gray-100 text-xl hover:text-gray-900 rounded-md hover:bg-gray-300 p-3 font-thin"
              >
                Products
              </a>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-200 rounded-md shadow-lg">
                  <li>
                    <a
                      href="/frozen-crab"
                      className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300 rounded-md font-thin text-2xl"
                    >
                      Frozen Crab
                    </a>
                  </li>
                  <li>
                    <a
                      href="/live-crab"
                      className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-300 rounded-md font-thin text-2xl"
                    >
                      Live Crab
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/contact"
                className="text-gray-700  bg-gray-100 text-xl hover:text-gray-900 rounded-md hover:bg-gray-300 p-3 font-thin"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
