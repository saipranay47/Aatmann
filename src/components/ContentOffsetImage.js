import React from "react";
import Button2 from "./Button2";

function ContentOffsetImage({
  title,
  discription,
  toRoute,
  img,
  imagePlace = "right",
}) {
  const sectionClass = `overflow-hidden sm:grid sm:grid-cols-2 sm:items-center flex ${
    imagePlace === "right" ? "flex-col-reverse" : "flex-col"
  }`;
  return (
    <div>
      <section className={sectionClass}>
        {imagePlace === "left" && (
          <img
            alt={title}
            src={img}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tr-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tr-[60px] px-5 md:p-0 lg:p-0"
          />
        )}

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-or md:text-4xl font-pd mb-3">
              {title}
            </h2>

            <p className="hidden text-tex md:my-4 md:block">{discription}</p>

            {toRoute && <Button2 lroute={toRoute} title="More Details" />}

          </div>
        </div>

        {imagePlace === "right" && (
          <img
            alt={title}
            src={img}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px] px-5 md:p-0 lg:p-0"
          />
        )}
      </section>
    </div>
  );
}

export default ContentOffsetImage;
