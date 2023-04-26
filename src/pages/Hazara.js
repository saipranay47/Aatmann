import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import KetakiImg from "../images/ketaki.jpeg";
import HazaraImg from "../images/hazara.jpeg";
import AparajitaImg from "../images/aparajita.jpeg";
import Arrow from "../images/arrow.svg";
import DynamicCarousel from "../components/DynamicCarousel";
import { Link } from "react-router-dom";

function Hazara() {
  const HazaraImages = [
    "DSC_3516.jpg",
    "DSC_3529.jpg",
    "DSC_3501.jpg",
    "DSC_3438.jpg",
    "DSC_3546.jpg",
    "DSC_3545.jpg",
    "DSC_3554.jpg",
    "DSC_3524.jpg",
    "DSC_3523.jpg",
    "DSC_3537.jpg",
    "DSC_3497.jpg",
  ];
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      
    >
      <div className="min-h-screen mt-10">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Hazara{" "}
          <span className=" font-normal italic font-pd text-or ">
            or Maa saraswati
          </span>
        </h1>
        <div>
          <img
            src={HazaraImg}
            alt="dsds"
            className="w-screen mx-auto object-cover object-center p-7"
            style={{ height: "650px" }}
          />
        </div>
        <div className="w-full md:flex md:justify-between md:items-start p-7 text-tex">
          <h1 className="text-2xl font-black sm:text-2xl md:text-3xl lg:text-3xl text-tex font-pd text-left md:mb-0 md:mr-5 mb-3 ">
            Hazara <br />
            <span className=" font-normal italic font-pd text-or ">
              or Maa Laxmi
            </span>
          </h1>
          <p className="text-sm md:w-2/3 md:text-left">
            The Hazara or Maa Laxmi cottage at Aatmann Dahanu offers a unique
            and authentic experience, designed to immerse you in the rustic
            charm of Indian wealth. The cottage is senior citizen-friendly, with
            everything on one level for ease of access, and features
            turmeric-infused bathrooms, neem leaf pillows, and sandalwood
            quilts. Relax on the resting chairs surrounded by a flower bed of
            gandharva flowers, offered to Lord Vishnu, and enjoy the natural and
            organic accessories, including room chappals and natural sprays, for
            a truly holistic experience.
          </p>
        </div>
      </div>
      <div className="md:p-10 lg:p-10 p-1">
        <DynamicCarousel
          imageFiles={HazaraImages}
          folderName="Hazara"
          animationHandler="fade"
          interval={2000}
          swipeable={true}
          autoPlay={true}
          useKeyboardArrows={true}
        />
      </div>

      <div className="mb-10 mt-5">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          View{" "}
          <span className=" font-normal italic font-pd text-or ">
            other cottages
          </span>
        </h1>
        <div className="container mx-auto pt-8">
          <div className="flex flex-wrap">
            <div className="text-tex rounded-lg overflow-hidden md:m-10 lg:m-10 m-1 hover:shadow-xl">
              <Link className="relative" to="/cottages/Ketaki">
                <img
                  src={KetakiImg}
                  alt="KetakiImg"
                  className=" h-80 w-full object-cover hover:opacity75 transition-opacity duration-300 rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center opacity-100 cursor-pointer">
                  <div className="flex justify-between  w-full px-8 items-center py-3 bg-[#000000c2] ">
                    <h3 className="text-3xl">Ketaki</h3>
                    <img src={Arrow} alt="" className=" h-14" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-tex rounded-lg overflow-hidden md:m-10 lg:m-10 m-1 hover:shadow-xl">
              <Link className="relative" to="/cottages/aparajita">
                <img
                  src={AparajitaImg}
                  alt="AparajitaImg"
                  className=" h-80 w-full object-cover hover:opacity75 transition-opacity duration-300 rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center opacity-100 cursor-pointer">
                  <div className="flex justify-between  w-full px-8 items-center py-3 bg-[#000000c2]">
                    <h3 className="text-3xl">Aparajita</h3>
                    <img src={Arrow} alt="" className=" h-14" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hazara;
