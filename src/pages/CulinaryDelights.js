import React from "react";
import CulinaryOffsetImages from "../components/CulinaryOffsetImages";
// import food from "../images/food1.jpeg"
// import food1 from "../images/food1.jpeg";
// import food2 from "../images/food2.jpeg";
// import food3 from "../images/food3.jpeg";
import lunch from "../images/lunch.jpeg"
import tea from "../images/tea.jpeg"
import dinner from "../images/dinner.jpeg"

function CulinaryDelights() {
const breakfastImages=[
  lunch,
  tea,
  dinner
];
const lunchImages=[
  lunch,
  tea,
  dinner
];
const snacksImages=[
  lunch,
  tea,
  dinner
];
const dinnerImages=[
  lunch,
  tea,
  dinner
];

  return (
    <section
      className="flex justify-center items-center flex-col"
      
    >
      <br />
      <br />
      <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center mb-8">
        Culinary{" "}
        <span className=" font-normal italic font-pd text-or ">Delights</span>
      </h1>
      <CulinaryOffsetImages
      
        title={"Wake up to a refreshing spread"}
        discription="At dawn, our spread includes fresh juices, a variety of fruits, an assortment of dry fruits (nuts), gulkand, baked cookies, sandwiches, hot beverages of choice, three hot breakfasts, fresh khakra, and a variety of condiments."
        img={breakfastImages}
      />
      <CulinaryOffsetImages
        title={"A traditional Saatvik lunch"}
        discription="At noon, we serve a Saatvik spread in a traditional way that has purity, taste, and is soul-satisfying and easy to digest. Condiments made in earthen pots using generation-old recipes are served to soothe the pallets of our guests. No artificial colors are used in the curry bases. The spread includes five types of freshly prepared salads, 2 types of sweets, three types of farsaan, two types of flatbreads, 3 green sabzis, one gravy-based curry, one type of dal, and two types of rice."
        img={lunchImages}
        imagePlace="left"
      />
      <CulinaryOffsetImages
        title={"A soiree-themed tea time"}
        discription="Tea time at Aatmann follows a soiree theme. While engaging in intellectual conversation with other guests or enjoying the calmness radiated by the drowning sun, beverages are accompanied by baked cookies, two types of hot snacks, and fresh fruits."
        img={snacksImages}
      />
      <CulinaryOffsetImages
        title={"A soul-satisfying dinner"}
        discription="Dinner is specially crafted in a way to soothe the souls of our guests. Firstly, two soups are a must to try out as they are made to stimulate the appetite for the following dishes. The menu consists of two types of chaats, three types of starters, live barbeque, two main-course dishes, and an assortment of Indian and western desserts. Our desserts are made without all-purpose flour and include almond butter as well as best quality chocolates such as Godiva and Belgian. The Indian traditional deserts consist of pure ghee, palm sugar, and the best quality of dry fruits."
        img={dinnerImages}
        imagePlace="left"
      />
    </section>
  );
}

export default CulinaryDelights;
