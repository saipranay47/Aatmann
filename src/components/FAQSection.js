import React, { useState } from "react";
import Image1 from "../images/hazara.jpeg";
import Image2 from "../images/ketaki.jpeg";
import Image3 from "../images/aparajita.jpeg";
import Cottageimg from "../images/cottageimg.jpeg";
import AccordionItem from "./AccordionItem";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [image, setImage] = useState(Image1);

  const questions = [
    {
      id: 1,
      question: "What is the cancellation policy for booking a cottage?",
      answer:
        " Our cancellation policy allows you to cancel your booking up to 48 hours before your arrival date. If you cancel within this period, you will receive a full refund. However, if you cancel within 48 hours of your arrival, no refund will be provided.",
      image: Image1,
    },
    {
      id: 2,
      question: "Are pets allowed in the cottages?",
      answer:
        "Yes, we are a pet-friendly property. Pets are welcome in our cottages, but we kindly request that you inform us about your pet in advance. Additional charges may apply. Please note that pets must be well-behaved, and you are responsible for any damages caused by your pet.",
      image: Image2,
    },
    {
      id: 3,
      question: "Are the cottages equipped with Wi-Fi and other amenities?",
      answer:
        "Yes, all our cottages come with complimentary Wi-Fi access for our guests. Additionally, each cottage is equipped with a flat-screen TV, a fully equipped kitchen, air conditioning, heating, and essential bathroom amenities.",
      image: Cottageimg,
    },
    {
      id: 4,
      question: "Is there parking available on-site?",
      answer:
        "Yes, we offer free on-site parking for our guests. Each cottage has an allocated parking space. If you require additional parking or have a larger vehicle, please contact us in advance to discuss your needs.",
      image: Cottageimg,
    },
    {
      id: 5,
      question: "Do the cottages have any accessibility features?",
      answer:
        "Yes, we are committed to providing an inclusive and accessible experience for all our guests. Our cottages are equipped with accessibility features, including ramp access, wider doorways, and grab bars in the bathrooms. Please contact us in advance if you require any additional accommodations, and we will be happy to assist you.",
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
