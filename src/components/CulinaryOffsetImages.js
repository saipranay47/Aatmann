import React from "react";
import ImageCarousel from "./ImageCarousel";

function CulinaryOffsetImages({
  title,
  discription,
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
        //   <img
        //     alt={title}
        //     src={img}
        //     className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tr-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tr-[60px] px-5 md:p-0 lg:p-0"
        //   />
        <div >
          <ImageCarousel imagePlace="left"  autoslide={true}  >
            {img.map((s)=>(
                <img src={s} className=""/>
            ))}
          </ImageCarousel>
         </div>
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
            <div>
          <ImageCarousel imagePlace="right" autoslide={true} >
          {img.map((s)=>(
              <img src={s}/>
          ))}
        </ImageCarousel>
        </div>
        )}
      </section>
    </div>
  );
}

export default CulinaryOffsetImages;
