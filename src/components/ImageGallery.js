import React from "react";

function ImageGallery() {
    const images = [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "8.jpeg",
      "9.jpeg",
      "10.jpeg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
    ];
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(/noice.png)",
      }}
    >
      <div className="masonry sm:masonry-sm md:masonry-md ">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg p-4 break-inside ">
            <img src={require(`../images/activities/${image}`)} alt="" className=" rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;
