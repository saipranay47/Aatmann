import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import KetakiImg from "../images/ketaki.jpeg";
import HazaraImg from "../images/hazara.jpeg";
import AparajitaImg from "../images/aparajita.jpeg";
import Arrow from "../images/arrow.svg";
import DynamicCarousel from "../components/DynamicCarousel";
import { Link } from "react-router-dom";

function Ketaki() {
  const KetakiImages = [
    "DSC_3348.jpg",
    "DSC_3413.jpg",
    "DSC_3605.jpg",
    "DSC_3400.jpg",
    "DSC_3396.jpg",
    "DSC_3142.jpg",
    "DSC_3422.jpg",
    "DSC_3120.jpg",
    "DSC_3123.jpg",
    "DSC_3127.jpg",
    "DSC_3327.jpg",
    "DSC_3093.jpg",
  ];
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/noice.png)",
      }}
    >
      <div className="min-h-screen mt-10">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Ketaki{" "}
          <span className=" font-normal italic font-pd text-or ">
            or Maa saraswati
          </span>
        </h1>
        <div>
          <img
            src={KetakiImg}
            alt="dsds"
            className="w-screen mx-auto object-cover object-center p-7"
            style={{ height: "650px" }}
          />
        </div>
        <div className="w-full md:flex md:justify-between md:items-start p-7 text-tex">
          <h1 className="text-2xl font-black sm:text-2xl md:text-3xl lg:text-3xl text-tex font-pd text-left md:mb-0 md:mr-5 mb-3 ">
            Ketaki <br />
            <span className=" font-normal italic font-pd text-or ">
              or Maa saraswati
            </span>
          </h1>
          <p className="text-sm md:w-2/3 md:text-left">
            Experience tranquility in the Ketaki Cottage, devoted to Maa
            Saraswati, the goddess of knowledge. The cottage is adorned with a
            soothing white theme, inspired by the shloka "ya shwet padmasana."
            Enjoy eco-friendly amenities, organic toiletries, and uniquely
            crafted interiors made from natural materials like lime, coconut
            kernel, kokam wax, and rice grains. Relax amidst the serene
            surroundings, complete with ananta flower beds and a double roof
            tile design for a cooler atmosphere. Aatmann offers a luxurious stay
            that embraces nature at its best.
          </p>
        </div>
      </div>
      <div className="md:p-10 lg:p-10 p-1">
        <DynamicCarousel
          imageFiles={KetakiImages}
          folderName="Ketki"
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
              <Link className="relative" to="/cottages/hazara">
                <img
                  src={HazaraImg}
                  alt="HazaraImg"
                  className=" h-80 w-full object-cover hover:opacity75 transition-opacity duration-300 rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center opacity-100 cursor-pointer">
                  <div className="flex justify-between  w-full px-8 items-center py-3 bg-[#000000c2] ">
                    <h3 className="text-3xl">Hazara</h3>
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

export default Ketaki;
