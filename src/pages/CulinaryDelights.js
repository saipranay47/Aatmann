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

function CulinaryDelights() {
    const breakfastImages = [
        bf1, bf2, bf3, bf4, bf5, bf6
    ];
const lunchImages = [
    lunch1,
    lunch2,
    lunch3,
    lunch4,
    lunch5,
    lunch6,
    lunch7,
];
    const snacksImages = [
        tea,
        tea2
    ];
    const dinnerImages = [
        dinner,
        dinner2,
        dinner3,
        dinner4,
        dinner5,
    ];

    return (
        <section className="flex justify-center items-center flex-col gap-10 lg:gap-20">
            <br/>
            <br/>
            <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center mb-8">
                Culinary{" "}
                <span className=" font-normal italic font-pd text-or ">Delights</span>
            </h1>
            <CulinaryOffsetImages
                title={"Wake up to a refreshing spread"}
                discription="Our early morning spread includes fresh juices, a variety of farm fresh fruits, an assortment of dry fruits (nuts), homemade gulkand, Chyawanprash, honeyamla, assortment of baked cookies, Halwa, four hot breakfasts, sandwiches, beverages of choice, Gir ghee khakra, fresh makhan, and a variety of condiments."
                img={breakfastImages}
            />
            <CulinaryOffsetImages
                title={"A traditional Saatvik lunch"}
                discription="At noon, we serve a Saatvik spread in a traditional way that has purity, taste, and is soul-satisfying and easy to digest. Condiments made in earthen pots using generation-old recipes of the erstwhile Baphna family are served to soothe the pallets of our guests. Artificial colors or preservatives are not used in the curry bases. The spread includes four types of freshly prepared salads, four types of homemade pickles, two types of sweets, two types of farsaan, two types of flatbreads, 3 green sabzis, one gravy-based curry, one type of dal, and two types of rice, four types of homemade papad. To aid your digestion, buttermilk is a must. in true sense we mean farm to table concept of fresh harvesting to fresh cooking."
                img={lunchImages}
                imagePlace="left"
            />
            <CulinaryOffsetImages
                title={"A soiree-themed tea time"}
                discription="Tea time at Aatmann follows a soiree theme. While engaging in intellectual conversation with other guests or enjoying the calmness radiated by the drowning sun, beverages are accompanied by baked cookies, homemade chivda, tea-time poories, two types of hot snacks, and fresh fruits."
                img={snacksImages}
            />
            <CulinaryOffsetImages
                title={"A soul-satisfying dinner"}
                discription="Dinner is specially crafted in a way to soothe the souls of our guests. Firstly, two soups are a must to try out as they are made to stimulate the appetite for the following dishes. The spread consists of two types of chaats, three types of starters, live barbeque, two main-course dishes, and an assortment of Indian and western desserts. Our desserts are made without all-purpose flour and include almond butter as well as best quality cocoa from Europe. The Indian traditional deserts consist of gir ghee, palm sugar, and the best quality of dry fruits. For a good sleep we provide gir milk paired with saffron, turmeric or gir ghee."
                img={dinnerImages}
                imagePlace="left"
            />
            <br/>
        </section>
    );
}

export default CulinaryDelights;