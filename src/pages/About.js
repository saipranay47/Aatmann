import React from "react";
import BgAnimation from "../components/BgAnimation";

function About() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/noice.png)",
      }}
    >
      <div className="flex w-full justify-evenly">
        <div className="h-full py-28 flex flex-col justify-evenly">
          <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-left ">
            About{" "}
            <span className=" font-normal italic font-pd text-or ">us</span>
          </h1>
          <br />
          <p className=" text-tex  text-lg max-w-lg text-left">
            Welcome to Aatmann Farm Stay, a serene and picturesque farm located
            in Dahanu, Maharashtra. Our farm stay is designed to provide guests
            with a unique and authentic farm experience, complete with fresh
            produce, serene landscapes, and warm hospitality.
          </p>
        </div>
        <div className="h-full py-28 flex flex-col justify-evenly">
          <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-left ">
            Mission {" "}
            <span className=" font-normal italic font-pd text-or ">
              and values
            </span>
          </h1>
          <br />
          <p className=" text-tex  text-lg max-w-lg text-left">
            At Aatmann Farm Stay, our mission is to provide guests with an
            unforgettable farm experience while promoting sustainable and
            responsible tourism. We believe in fostering a strong connection
            between people, nature, and food, and strive to educate and inspire
            our guests to live more sustainably.
          </p>
        </div>
      </div>
      <BgAnimation />
    </section>
  );
}

export default About;
