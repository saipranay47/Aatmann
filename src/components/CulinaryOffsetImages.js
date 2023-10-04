import React from "react";

function CulinaryOffsetImages({title, discription, img, imagePlace = "right"}) {
    const sectionClass = `overflow-hidden lg:grid lg:grid-cols-2 lg:items-center flex  ${
        imagePlace === "right" ? "flex-col-reverse lg:h-[50vh]" : "flex-col lg:h-[54vh]"
    }`;
    return (
        <div>
            <section className={sectionClass}>
                {imagePlace === "left" && (
                    <div className="carousel carousel-center max-w-2xl p-3 md:p-4 space-x-4 bg-gre">
                        {img.map((s) => (
                            <div className="carousel-item">
                                <img src={s} alt={title} className="rounded-box md:h-[400px] h-[220px]"/>
                            </div>
                        ))}
                    </div>
                )}

                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-xl  sm:text-left">
                        <h2 className="text-2xl font-bold text-or md:text-4xl font-pd mb-3">
                            {title}
                        </h2>

                        <p className=" text-tex md:my-4 md:block">{discription}</p>
                    </div>
                </div>

                {imagePlace === "right" && (
                    <div className="carousel carousel-center max-w-2xl p-3 md:p-4 space-x-4 bg-gre">
                        {img.map((s) => (
                            <div className="carousel-item">
                                <img src={s} alt={title} className="rounded-box md:h-[400px] h-[220px]"/>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default CulinaryOffsetImages;