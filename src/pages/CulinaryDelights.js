import React from "react";
import CulinaryOffsetImages from "../components/CulinaryOffsetImages";
import bf1 from "../images/Breakfast/bf1.jpeg"
import bf2 from "../images/Breakfast/bf2.jpeg"
import bf3 from "../images/Breakfast/bf3.jpeg"
import bf4 from "../images/Breakfast/bf4.jpeg"
import bf5 from "../images/Breakfast/bf5.jpeg"
import bf6 from "../images/Breakfast/bf6.jpeg"
import lunch1 from "../images/Lunch/lunch1.jpeg"
import lunch2 from "../images/Lunch/lunch2.jpeg"
import lunch3 from "../images/Lunch/lunch3.jpeg"
import lunch4 from "../images/Lunch/lunch4.jpeg"
import lunch5 from "../images/Lunch/lunch5.jpeg"
import lunch6 from "../images/Lunch/lunch6.jpeg"
import lunch7 from "../images/Lunch/lunch7.jpeg"
import dinner from "../images/Dinner/dinner.jpeg"
import dinner2 from "../images/Dinner/dinner2.jpeg"
import dinner3 from "../images/Dinner/dinner3.jpeg"
import dinner4 from "../images/Dinner/dinner4.jpeg"
import dinner5 from "../images/Dinner/dinner5.jpeg"
import tea from "../images/tea.jpeg"
import tea2 from "../images/tea2.jpg"
import ImageCarousel from "../components/ImageCarousel";

function CulinaryDelights() {
const breakfastImages=[
  bf1,bf2,bf3,bf4,bf5,bf6
];
const lunchImages=[
  lunch1,
  lunch2,
  lunch3,
  lunch4,
  lunch5,
  lunch6,
  lunch7,
];
const snacksImages=[
  tea,
  tea2
];
const dinnerImages=[
  dinner,
  dinner2,
  dinner3,
  dinner4,
  dinner5,
];

  return (
    <section className="flex justify-center items-center flex-col gap-10 lg:gap-20">
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
      {/* <CulinaryOffsetImages
        title={"A soul-satisfying dinner"}
        discription="Dinner is specially crafted in a way to soothe the souls of our guests. Firstly, two soups are a must to try out as they are made to stimulate the appetite for the following dishes. The menu consists of two types of chaats, three types of starters, live barbeque, two main-course dishes, and an assortment of Indian and western desserts. Our desserts are made without all-purpose flour and include almond butter as well as best quality chocolates such as Godiva and Belgian. The Indian traditional deserts consist of pure ghee, palm sugar, and the best quality of dry fruits."
        img={dinnerImages}
        imagePlace="left"
      /> */}
      <div>
        <section className="overflow-hidden lg:grid lg:grid-cols-2 lg:items-center flex flex-col ">

            <ImageCarousel imagePlace="left" autoslide={true} h={false}>
              {dinnerImages.map((s) => (
                <img src={s} alt="culinary delights" className="object-fill" />
              ))}
            </ImageCarousel>


          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-2xl font-bold text-or md:text-4xl font-pd mb-3">
                A soul-satisfying dinner
              </h2>

              <p className=" text-tex md:my-4 md:block">
                Dinner is specially crafted in a way to soothe the souls of our
                guests. Firstly, two soups are a must to try out as they are
                made to stimulate the appetite for the following dishes. The
                menu consists of two types of chaats, three types of starters,
                live barbeque, two main-course dishes, and an assortment of
                Indian and western desserts. Our desserts are made without
                all-purpose flour and include almond butter as well as best
                quality chocolates such as Godiva and Belgian. The Indian
                traditional deserts consist of pure ghee, palm sugar, and the
                best quality of dry fruits.
              </p>
            </div>
          </div>
        </section>
      </div>

      <br />
    </section>
  );
}

export default CulinaryDelights;