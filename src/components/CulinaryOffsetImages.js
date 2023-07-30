import React from "react";
import ImageCarousel from "./ImageCarousel";

function CulinaryOffsetImages({
  title,
  discription,
  img,
  imagePlace = "right",
}) {
  const sectionClass = `overflow-hidden lg:grid lg:grid-cols-2 lg:items-center flex  ${
    imagePlace === "right" ? "flex-col-reverse lg:h-[50vh]" : "flex-col lg:h-[54vh]"
  }`;
  return (
    <div>
      <section className={sectionClass}>
        {imagePlace === "left" && (
          <ImageCarousel imagePlace="left" autoslide={true} h={true}>
            {img.map((s) => (
              <img src={s} className="object-fill" />
            ))}
          </ImageCarousel>
        )}

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-or md:text-4xl font-pd mb-3">
              {title}
            </h2>

            <p className=" text-tex md:my-4 md:block">{discription}</p>
          </div>
        </div>

        {imagePlace === "right" && (
          <ImageCarousel imagePlace="right" autoslide={true} h={true}>
            {img.map((s) => (
              <img src={s} className="object-fill" />
            ))}
          </ImageCarousel>
        )}
      </section>
    </div>
  );
}

export default CulinaryOffsetImages;