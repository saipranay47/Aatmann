import React from "react";
import VideoTestimonials from "../components/VideoTestimonials";

function Reviews() {
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/noice.png)",
      }}
    >
      <div className="h-full lg:py-28 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Real Stories from{" "}
          <span className=" font-normal italic font-pd text-or ">
            Our Happy Customers
          </span>
        </h1>
        <br />
        <p className=" text-tex  text-lg max-w-4xl text-center">
          Check out our video testimonials from real customers who have
          experienced our products and services. See how we've helped them
          achieve their goals and why they keep coming back.
        </p>
      </div>
      {/* <ImageGallery /> */}

      <VideoTestimonials />
    </section>
  );
}

export default Reviews;
