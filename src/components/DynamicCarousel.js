import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This requires a loader

const DynamicCarousel = ({ folderName, imageFiles }) => {
  const renderSlides = () => {
    return imageFiles.map((file, index) => (
      <div key={index}>
        <img
          src={`${process.env.PUBLIC_URL}/${folderName}/${file}`}
          alt={`Slide ${index + 1}`}
          className="w-screen mx-auto object-cover object-center aspect-video"
          style={{ maxHeight: "650px" }}
        />
        {/* <p className="legend">{`Legend ${file}`}</p> */}
      </div>
    ));
  };

  return (

    <Carousel
      style={{
        backgroundImage: "url(/noice.png)",
      }}
      showArrows={true}
    >
      {renderSlides()}
    </Carousel>
  );
};

export default DynamicCarousel;
