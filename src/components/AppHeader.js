import React, { useState, useEffect } from "react";
import logo from "../images/Aatmann-Horizontal-Logo-Color.png";
import { Link } from "react-router-dom";
import Button2 from "./Button2";

function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (isMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav class="w-full bg-gray-900 text-tex fixed top-0 z-50">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              class="hidden peer"
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div class="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <Link
                to="/"
                aria-label="logo"
                class="flex space-x-2 items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img src={logo} alt="aatmann logo" className="max-h-8" />
              </Link>

              <div class="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  for="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  class="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    class="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    style={{
                      transform: isMenuOpen
                        ? "rotate(45deg) translate(0, 0.45rem)"
                        : "",
                    }}
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    style={{
                      transform: isMenuOpen
                        ? "rotate(-45deg) translate(0, -0.45rem )"
                        : "",
                    }}
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              class="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            <div
              class="z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700 flex-col"
            >
              <div class="text-tex lg:w-auto w-full lg:pt-0">
                <ul class="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li className="relative group">
                    <span
                      class="block md:px-4 transition hover:text-primary cursor-pointer"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      Cottages &#9660;
                    </span>
                    <div
                      className={`${
                        isDropdownOpen ? "block" : "hidden"
                      } absolute left-0 w-48 rounded-lg bg-black shadow-lg z-10 lg:group-hover:block`}
                    >
                      <ul className="space-y-2 p-3">
                        <li>
                          <Link
                            to="/cottages"
                            className="block px-4 py-2 transition hover:text-primary hover:underline"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            View all
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cottages/ketaki"
                            className="block px-4 py-2 transition hover:text-primary hover:underline"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Ketaki
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cottages/hazara"
                            className="block px-4 py-2 transition hover:text-primary hover:underline"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Hazara
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cottages/aparajita"
                            className="block px-4 py-2 transition hover:text-primary hover:underline"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            Aparajita
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/about"
                      class="block md:px-4 transition hover:text-primary hover:underline"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tribute"
                      class="block md:px-4 transition hover:text-primary hover:underline"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Tribute
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/culinary-delights"
                      class="block md:px-4 transition hover:text-primary hover:underline"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Culinary Delights
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      class="block md:px-4 transition hover:text-primary hover:underline"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0 lg:mt-0 ">
                <Button2
                  lroute="/enquire-booking"
                  title="Enquire Booking"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
