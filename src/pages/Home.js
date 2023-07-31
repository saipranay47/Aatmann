import React from "react";
import Loading from "../components/Loading";
import Ketaki from "../images/ketaki.jpeg";
import Hazara from "../images/hazara.jpeg";
import Aparajita from "../images/aparajita.jpeg";
import Arrow from "../images/arrow.svg";
import Buttonsp from "../components/Buttonsp";
import FAQSection from "../components/FAQSection";
import ActivitiesSection from "../components/ActivitiesSection";
import Feedback from "../components/Feedback";
import divider from "../images/DIVIDER.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Loading />
      {/* <Navbar /> */}
      <div
        className="bg-[#2d2d2d] bg-no-repeat bg-cover bg-blend-multiply"
        style={{
          backgroundImage: "url(./DSC_3438.JPG)",
        }}
      >
        <section
          data-cy="paragraph-hero"
          className="pt-8 md:pt-12 lg:pt-40 pb-8 md:pb-12 lg:pb-40 bg-no-repeat bg-cover "
        >
          <div className="container px-6 mx-auto text-center">
            <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-or font-pd ">
              From Nature. <br /> With Nature.
            </h1>
            <div
              data-cy="node--body"
              className="max-w-xl text-lg font-light leading-tight sm:text-xl md:text-2xl text-tex mt-6 mx-auto "
            >
              <p className="text-center">
                Explore and live the ‘natural’ way with us. Experience the
                difference as you unwind and understand the web of life
                immersing yourself into and get one with it.
              </p>

              <div className="flex justify-center items-center mt-10">
                <a
                  href="https://wa.me/918766015085"
                  target="_"
                  class="relative inline-block text-lg group"
                >
                  <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-or rounded-3xl group-hover:text-tex">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-3xl bg-tex"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-or group-hover:-rotate-180 ease"></span>
                    <span class="relative text-xl">Book now</span>
                  </span>
                  <span
                    class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-or rounded-3xl group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-3xl"
                  ></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="h-72 flex justify-center items-center">
        {/* <svg
          className="left-20 absolute opacity-0 lg:opacity-100"
          width="117"
          height="117"
          viewBox="0 0 117 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62 26V23H56V26H62ZM59 92L56.1457 92.9235L61.9528 92.53L59 92ZM56 26V92H62V26H56ZM61.9528 92.53C63.4888 83.9725 69.5517 77.9682 76.1651 74.012C79.4471 72.0487 82.7696 70.6516 85.5265 69.7498C88.3791 68.8166 90.359 68.5 91 68.5V62.5C89.391 62.5 86.6834 63.0584 83.661 64.0471C80.5429 65.0671 76.8029 66.6388 73.0849 68.863C65.6983 73.2818 58.0112 80.5275 56.0472 91.47L61.9528 92.53ZM61.8543 91.0765C58.8378 81.7528 52.0482 74.6419 45.1341 69.9008C38.3117 65.2226 30.8425 62.5 26 62.5V68.5C29.1575 68.5 35.4383 70.5274 41.7409 74.8492C47.9518 79.1081 53.6622 85.2472 56.1457 92.9235L61.8543 91.0765Z"
            fill="#FEE9BE"
          />
          <circle
            cx="58.5"
            cy="58.5"
            r="57.5"
            stroke="#FEE9BE"
            stroke-width="2"
          />
        </svg> */}

        <p className=" text-tex  text-lg max-w-lg text-center">
          If the desire to rest in the middle of a quiet forest has been
          haunting you for a long time - then you should come to us.
          <br />
          <br />
          <span className=" text-or font-pd text-2xl mt-10 font-semibold">
            “Aatmann Dahanu” From Nature With Nature
          </span>
        </p>
      </section>
      <br />
      <img
        src={divider}
        alt=""
        className=" bg-transparent w-[93%] h-3 m-auto"
      />
      {/* cottage*/}
      <section className=" min-h-screen flex justify-center items-center">
        <div>
          <h1 className="max-sm:mt-10 sm:mb-10 lg:mb-14 text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
            Choose{" "}
            <span className=" font-normal italic font-pd text-or ">
              your cottage
            </span>
          </h1>

          <div className="container mx-auto pt-8">
            <div className="flex flex-wrap justify-center">
              {/* card ketaki */}
              <div className="w-full md:w-1/3 p-5 mb-10">
                <div className="text-tex rounded-lg overflow-hidden">
                  <Link to="/cottages/ketaki" className="relative">
                    <img
                      src={Ketaki}
                      alt="Ketaki"
                      className="h-56 w-full object-cover hover:opacity75 transition-opacity duration-300 rounded-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#0000008e] cursor-pointer">
                      <img src={Arrow} alt="" />
                    </div>
                  </Link>
                  <div className="pt-3">
                    <h3 className="text-3xl font-semibold mb-1">Ketaki</h3>
                    <p className="text-sm line-clamp-5">
                      Ketaki is a cottage devoted to the goddess of knowledge,
                      Maa Saraswati. The whole theme is qhite as Maa saraswati
                      shloka has ya shwet padmasana. The bathroom is made up of
                      lime, kgopra or coconut kernel, kokam wax, rice grains.
                      The dohad or quilt is made with colors derived from the
                      petals of hibiscus flowers and pillows infused with need
                      leaves.
                    </p>
                  </div>
                </div>
              </div>

              {/* card hazara */}
              <div className="w-full md:w-1/3 p-4 mb-10 ">
                <div className="text-tex rounded-lg overflow-hidden">
                  <Link to="/cottages/hazara" className="relative">
                    <img
                      src={Hazara}
                      alt="Hazara"
                      className="h-56 w-full object-cover hover:opacity-75 transition-opacity duration-300 rounded-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#0000008e] cursor-pointer">
                      <img src={Arrow} alt="" />
                    </div>
                  </Link>
                  <div className="pt-3">
                    <h3 className="text-3xl font-semibold mb-1">Hazara</h3>
                    <p className="text-sm text-ellipsis">
                      Hazara is a cottage devoted to the goddess of wealth, Maa
                      Laxmi. In india wealth is gold and gold is yellow colour
                      so to give it a rustic look the bathrooms and the
                      upholstery have been made with turmeric or haldi. The
                      pillows are infused with neem leaves and the quilts are
                      made with turmeric, sandal and woodash.
                    </p>
                  </div>
                </div>
              </div>

              {/* card aparajita */}
              <div className="w-full md:w-1/3 p-4 mb-10 ">
                <div className="text-tex rounded-lg overflow-hidden">
                  <Link className="relative" to="/cottages/aparajita">
                    <img
                      src={Aparajita}
                      alt="Aparajita"
                      className="h-56 w-full object-cover hover:opacity-75 transition-opacity duration-300 rounded-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#0000008e] cursor-pointer">
                      <img src={Arrow} alt="" />
                    </div>
                  </Link>
                  <div className="pt-3">
                    <h3 className="text-3xl font-semibold mb-1">Aparajita</h3>
                    <p className="text-sm line-clamp-5">
                      Aparajita is best described as the goddess of power, Maa
                      Parvati. The cottage is a fusion between modern and
                      medieval architecture. The bathroom is made up of cobalt
                      dioxide which gives a blue colour and is mixed with
                      aloevera gel, lime, rice husk. The quilts are colored with
                      colors derived from the local plants of mahuva and palash.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Buttonsp lroute="cottages" title="Know more" />
        </div>
      </section>
      <br />
      <img
        src={divider}
        alt=""
        className=" bg-transparent w-[93%] h-3 m-auto"
      />
      {/* FAQ section */}
      <section className=" min-h-screen flex justify-center items-center flex-col">
        <FAQSection />
      </section>

      <br />
      <img
        src={divider}
        alt=""
        className=" bg-transparent w-[93%] h-3 m-auto"
      />
      <br />

      {/* Activites section */}
      <section className=" min-h-screen flex justify-center items-center flex-col">
        <ActivitiesSection />
      </section>
      <br />
      <img
        src={divider}
        alt=""
        className=" bg-transparent w-[93%] h-3 m-auto"
      />
      {/* Feedback section */}
      <section className=" min-h-screen flex justify-center items-center flex-col">
        <Feedback />
      </section>
    </div>
  );
}

export default Home;
