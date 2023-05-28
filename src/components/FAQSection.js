import React, { useState } from "react";
import Image1 from "../images/hazara.jpeg";
import Image2 from "../images/ketaki.jpeg";
import dogs from "../images/dogs.jpeg";
import Cottageimg from "../images/cottageimg.jpeg";
import AccordionItem from "./AccordionItem";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [image, setImage] = useState(Image1);

  const questions = [
    {
      id: 1,
      question: "Is the property pet friendly?",
      answer: " Yes, they are our beloved companions and they are welcome.",
      image: dogs,
    },
    {
      id: 2,
      question: "What about alcohol and other substances?",
      answer:
        "No, at Aatmann alcohol, smoking, or any kind of substance use is prohibited. ",
      image: Image2,
    },
    {
      id: 3,
      question: "Can we walk around the property?",
      answer:
        " Yes, Aatmann is surrounded by our 60-acre two-century-old fruit orchid and we invite you to walk around and absorb the information provided by nature.",
      image: Cottageimg,
    },
    {
      id: 4,
      question: "Do you sell any organic products that you use?",
      answer:
        "Yes, there is a dedicated store on the property which has products made at Aatmann and available to be bought by our guests. ",
      image: Cottageimg,
    },
    {
      id: 5,
      question: "Do you serve meat dishes?",
      answer: "No, we are a pure vegetarian property. ",
      image: Image2,
    },
  ];

  const handleAccordionClick = (id, image) => {
    setActiveQuestion(id);
    setImage(image);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex  flex-wrap-reverse">
        <div className="w-full  md:w-5/12 p-2">
          <div className="relative w-full h-[30rem] md:h-[40rem] overflow-hidden">
            {questions.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={`FAQ ${item.id}`}
                className={`${
                  activeQuestion === item.id
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0"
                } w-full h-full object-cover transition-opacity duration-500`}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 md:ml-10">
          <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd lg:mb-2 mb-8 md:mb-1">
            The most frequent{" "}
            <span className=" font-normal italic font-pd text-or ">
              questions
            </span>
          </h1>
          <br />
          <br />
          <br />
          {questions.map((item) => (
            <AccordionItem
              key={item.id}
              {...item}
              onClick={() => handleAccordionClick(item.id, item.image)}
              isActive={activeQuestion === item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
