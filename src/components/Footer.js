import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Aatmann-Horizontal-Logo-Color.png";
import instagram from "../images/instagram.svg";
import whatsapp from "../images/whatsapp-icon.svg"
import location from "../images/location.svg"
function Footer() {
  return (
    <footer className=" w-full bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              href="https://www.aatmanndahanu.com"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img src={logo} alt="aatmann logo" className="max-h-8" />
            </a>

            <p className="text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 w-60 mt-6">
              Dahanu charoti road, Saravali, next to r.s.t weight bridge,
              Dahanu, Maharashtra 401602<br></br>
              +91 87660 15085<br></br>
              aatmanndahanu@gmail.com
            </p>
          </div>
          <div className="flex flex-col md:items-end sm:items-end">
            <div className="flex flex-row  pt-3 w-36 justify-between mb-6 md:mb-9 md:mr-6 mr-4">
              <a href="https://www.instagram.com/aatmann.dahanu/">
                <img src={instagram} alt="instagram-logo" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=918766015085&text&type=phone_number&app_absent=0">
                <img src={whatsapp} alt="whatsapp-logo" />
              </a>
              <a href="https://www.google.com/maps/place/Aatmann+Dahanu+Farmstay/@19.984056,72.7672,17z/data=!4m6!3m5!1s0x3be7275e1e01dbfd:0xf227b11b95ee77f8!8m2!3d19.9840559!4d72.7671995!16s%2Fg%2F11rx2wxqkr?hl=en&entry=ttu">
                <img src={location} alt="whatsapp-logo" width="30px" />
              </a>
            </div>
            <div>
              <ul class="flex    flex-row flex-wrap  text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 md:justify-between">
                <li>
                  <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/tribute" class="mr-4 hover:underline md:mr-6 ">
                    Tribute
                  </Link>
                </li>
                <li>
                  <Link to="/activities" class="mr-4 hover:underline md:mr-6 ">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/culinary-delights"
                    class="mr-4 hover:underline md:mr-6 "
                  >
                    Culinary Delights
                  </Link>
                </li>
                <li>
                  <Link to="/contact" class="mr-4 hover:underline md:mr-6 ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          Copyright © 2023{" "}
          <a href="https://www.aatmanndahanu.com/" class="hover:underline">
            Aatmann Dahanu
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
export default Footer;
