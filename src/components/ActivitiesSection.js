import React from "react";
import ActivityImage from "../images/acc.png";
import Food1 from "../images/food1.jpeg";
import Food2 from "../images/food2.jpeg";
import Food3 from "../images/food3.jpeg";
import Food4 from "../images/food4.jpeg";
import Food5 from "../images/food5.jpeg";
import Food6 from "../images/food6.jpeg";
import Buttonsp from "./Buttonsp";

function ActivitiesSection() {
  return (
    <div className="container mx-auto py-8 text-tex">
      <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd lg:mb12 mb-8 text-center md:mb-12">
        What
        <span className=" font-normal italic font-pd text-or "> to eat</span>
      </h1>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col lg:w-1/3 md:w-1/3 w-full p-4">
          <h3 className=" font-semibold text-2xl mb-2">Savor the Flavors</h3>
          <p className="font-light">
            Embark on a gastronomic journey with our delectable menu, showcasing
            the best of local and international cuisine. Prepared with passion
            and artistry, each dish is a celebration of flavors, guaranteed to
            entice your palate and elevate your dining experience.
          </p>
        </div>
        <div className="flex lg:w-8/12  md:w-8/12 h-80 w-full md:pl-12 lg:pl-14">
          <img
            src={Food1}
            alt="activity"
            className="p-3 rounded-2xl object-cover w-full"
          />
          <div className="md:flex sm:flex lg:flex flex-col h-80 w-full hidden">
            <img
              src={Food2}
              alt="activity"
              className="h-1/2 p-3 rounded-2xl object-cover"
            />
            <img
              src={Food3}
              alt="activity"
              className="h-1/2 p-3 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between flex-wrap-reverse">
        <div className="flex lg:w-8/12  md:w-8/12 h-80 w-full ">
          <div className="md:flex sm:flex lg:flex h-full hidden">
            <img
              src={Food4}
              alt="activity"
              className="h-full p-3 rounded-2xl  w-1/2 object-cover"
            />
            <img
              src={Food5}
              alt="activity"
              className="h-full p-3 rounded-2xl w-1/2 object-cover"
            />
          </div>
          <img
            src={Food6}
            alt="activity"
            className="p-3 rounded-2xl md:w-2/5 lg:w-1/2 w-full object-cover"
          />
        </div>
        <div className="flex flex-col lg:w-1/3 md:w-1/3 w-full p-4 items-start">
          <h3 className=" font-semibold text-2xl mb-2 object-cover">
            Taste of Paradise
          </h3>
          <p>
            Delight in an array of sumptuous dishes crafted by our skilled
            chefs, combining local specialties and global favorites. Immerse
            yourself in a memorable dining experience that celebrates the
            harmony of flavors and textures.
          </p>
          <br />
          <Buttonsp
            lroute="/culinarydelights"
            title="Know more"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default ActivitiesSection;
