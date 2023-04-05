import React from "react";
import ImageGallery from "../components/ImageGallery";

function Activities() {
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/noice.png)",
      }}
    >
      <div className="h-full lg:py-28 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Activities {" "}
          <span className=" font-normal italic font-pd text-or ">
            at Aatmann
          </span>
        </h1>
        <br />
        <p className=" text-tex  text-lg max-w-4xl text-center">
          It is close to nature hence, vegetable plucking, fruit plucking, spice
          harvesting, cycling around the 40- acre property, meditation on the
          machan, plunge pool are some of the activities you can enjoy with your
          loved ones at Aatmann. There are indoor games as well as outdoor games
          available at the property. A specially made cafeteria in a gazebo
          style to spend some quality time with your family. <br /> <br />These were the
          activities at Aatmann but, in Dahanu you can visit the beach, the
          famous and divine Mahalaxmi Temple, one of a kind Jain Temple and take
          a round in this cosy and loving town.
        </p>
      </div>
      <ImageGallery />

    </section>
  );
}

export default Activities;
