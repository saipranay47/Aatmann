import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import KetakiImg from "../images/ketaki.jpeg";
import HazaraImg from "../images/hazara.jpeg";
import AparajitaImg from "../images/aparajita.jpeg";
import Arrow from "../images/arrow.svg";
import CottageCarousel from "../components/CottageCarousel";
import { Link } from "react-router-dom";
import img1 from "../images/Aparajita/DSC_3809.jpg"
import img2 from "../images/Aparajita/DSC_3789.jpg"
import img3 from "../images/Aparajita/DSC_3777.jpg"
import img4 from "../images/Aparajita/DSC_3832.jpg"
import img5 from "../images/Aparajita/DSC_3802.jpg"
import img6 from "../images/Aparajita/DSC_3791.jpg"
import img7 from "../images/Aparajita/DSC_3797.jpg"
import img8 from "../images/Aparajita/DSC_3796.jpg"

function Aparajita() {
  const AparajitaImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
  ];
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      
    >
      <div className="min-h-screen mt-10">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Aparajita{" "}
          <span className=" font-normal italic font-pd text-or ">
            or Maa Parvati
          </span>
        </h1>
        <div>
          <img
            src={AparajitaImg}
            alt="dsds"
            className="w-screen mx-auto object-cover object-center p-7"
            style={{ height: "650px" }}
          />
        </div>
        <div className="w-full md:flex md:justify-between md:items-start p-7 text-tex">
          <h1 className="text-2xl font-black sm:text-2xl md:text-3xl lg:text-3xl text-tex font-pd text-left md:mb-0 md:mr-5 mb-3 ">
            Aparajita <br />
            <span className=" font-normal italic font-pd text-or ">
              or Maa Parvati
            </span>
          </h1>
          <p className="text-base md:w-2/3 md:text-left">
            The Aparajita or Maa Parvati cottage at Aatmann Dahanu is a fusion
            of modern and medieval architecture, offering a unique and
            comfortable experience. The bathroom is made of cobalt dioxide mixed
            with aloevera gel, lime, and rice husk, giving a beautiful blue
            color. The quilts are dyed with natural colors from local plants,
            while the pillows are infused with neem leaves for a relaxing sleep.
            Relax on the hanging swing outside, surrounded by blue pea pudding,
            and immerse yourself in the pure and luxurious experience that
            Aatmann Dahanu offers.
          </p>
        </div>
      </div>
      <div className="md:p-10 lg:p-10 p-1">
      <CottageCarousel autoslide={true}>
          {AparajitaImages.map((s)=>(
            <img src={s} className="w-full h-full object-cover object-center aspect-video"/>
          ))}
        </CottageCarousel>
      </div>

      <div className="mb-10 mt-5">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          View{" "}
          <span className=" font-normal italic font-pd text-or ">
            other cottages
          </span>
        </h1>
        <div className="container mx-auto pt-8">
          <div className="flex flex-wrap justify-center">
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
              <Link className="relative" to="/cottages/Ketaki">
                <img
                  src={KetakiImg}
                  alt="KetakiImg"
                  className=" h-80 w-full object-cover hover:opacity75 transition-opacity duration-300 rounded-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center opacity-100 cursor-pointer">
                  <div className="flex justify-between  w-full px-8 items-center py-3 bg-[#000000c2]">
                    <h3 className="text-3xl">Ketaki</h3>
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

export default Aparajita;
