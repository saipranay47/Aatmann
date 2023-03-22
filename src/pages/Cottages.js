import React from "react";
import Ketaki from "../images/ketaki.jpeg";
import Hazara from "../images/hazara.jpeg";
import Aparajita from "../images/aparajita.jpeg";
import Arrow from "../images/arrow.svg";
import Buttonsp from "../components/Buttonsp";
import ContentOffsetImage from "../components/ContentOffsetImage";

function Cottages() {
  return (
    <section
      className=" min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url(./noice.png)",
      }}
    >
      <div>
        <br />
        <br />
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center mb-8">
          Our{" "}
          <span className=" font-normal italic font-pd text-or ">cottages</span>
        </h1>
        <ContentOffsetImage
          title="Ketaki or Maa saraswati"
          discription="Ketaki or Maa saraswati is a cottage devoted to the goddess of knowledge. The whole theme is qhite as Maa saraswati shloka has ya shwet padmasana. The bathroom is made up of lime, kgopra or coconut kernel, kokam wax, rice grains. The dohad or quilt is made with colors derived from the petals of hibiscus flowers and pillows infused with need leaves. The toilets are equipped with pure organic toiletries. The front of cottage is with a flower bed of ananta flowers which are offered to Maa saraswati. It's double roof tile to keep the cottage cool by 5 degrees and the cottage is cement free and chemical free.
          Come and be a part of your stay at aatmann wherein nature is at its best with luxury"
          img={Ketaki}
          toRoute="/cottages/ketaki"
        />
        <ContentOffsetImage
          title="Hazara or Maa Laxmi"
          discription="Hazara or Maa Laxmi is dedicated to the goddess of wealth. In india wealth is gold and gold is yellow colour so to give it a rustic look the bathrooms and the upholstery have been made with turmeric or haldi. The pillows are infused with neem leaves and the quilts are made with turmeric, sandal and woodash. The cottage is senior citizen friendly as everything is on 1 level. The sprout has 2 resting chairs with a flower bed of gandharva flowers which are offered to lord vishnu. There are organic room chappals with natural sprays and all natural accessories in the cottage to make your stay more comfortable with all natural luxuries. Experience a difference away from ceramic and artificial world by stepping in at aatmann dahanu for a holistic experience"
          img={Hazara}
          toRoute="/cottages/hazara"
          imagePlace="left"
        />
        <ContentOffsetImage
          title="Aparajita or Maa Parvati"
          discription="Aparajita or Maa Parvati is best described as goddess of power. The cottage is a fusion between modern and medieval architecture. The bathroom is made up of cobalt dioxide which gives a blue colour and is mixed with aloevera gel, lime, rice husk. The quilts are colored with colors derived from the local plants of mahuva and palash. A modern classic teakwood bed with a organic long staple cotton mattress from the ancient times with pillows infused with neem leaves to give u a comfortable relaxed baby sleep. The outside of the cottage has a hanging swing with a bed of blue pea pudding also known as aparajita or gokarna. This cottage is blue toned as maa parvatis husband is bhagvan shiv who is Neel varniya. At aatmann dahanu we believe in purity with nature and luxury to soothe your mind and soul"
          img={Aparajita}
          toRoute="/cottages/aparajita"
        />
      </div>
    </section>
  );
}

export default Cottages;
