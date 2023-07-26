import React from "react";
import bapan from "../images/Punamchandji Dhanrajji Baphna.jpeg";
import pic2 from "../images/pic2.jpeg";

function Tribute() {
  return (
    <section
      className=" min-h-screen flex justify-center pb-10"
      
    >
      <div className=" text-tex px-8 relative ">
      <img
              src={pic2}
              alt="Punamchandji Dhanrajji Baphna"
              className=" absolute object-cover mt-10  bg-black opacity-50"
            />
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center mb-8 my-10 mt-10 relative container mx-auto h-full  ">
          Tribute to <br />
          <span className=" font-normal italic font-pd text-or ">
            Late Punamchandji Dhanrajji Baphna
          </span>
        </h1>
            {/* <h3 class="absolute text-2xl text-blue-300 ">Top Left</h3> */}
           </div>
        {/* <div className="flex flex-wrap">
          <div className="md:pr-10  md:w-3/5 lg:w-3/5 w-full">
            <p className="text-lg text-left mb-4 ">
              A man with immense love for nature and a visionary, late
              Punamchandji Dhanrajji Baphna, aka Babuji, was dedicated to
              organic and sustainable farming. He received numerous recognitions
              and awards, including the Krishiratna in 1981 and Krishibhushan in
              1988.
            </p>
            <p className="text-lg text-left mb-4">
              As a pioneer in drip irrigation since 1969, he revolutionized
              farming techniques with the help of his sons, Manek and Naresh.
              Sadly, both sons passed away at a young age, and Babuji returned
              to farming with renewed passion. Agricultural universities,
              dignitaries, and scientists sought his knowledge and expertise in
              organic farming. His three-tier farming technique even brought
              Japanese scientist Masanobu Fukuoka, known for the One Straw
              Revolution, to his farm three times.
            </p>
            <p className="text-lg text-left mb-4">
              Aatmann Dahanu is a tribute to the legendary visionary late P.D.
              Baphna on his birth centenary by his grandson, Ajay Baphna, who
              worked with him for a decade. This century-old organic farm
              welcomes guests to experience peace of mind and reconnect with
              nature.
            </p>
            <p className="text-lg text-left mb-4">
              At Aatmann, your mind meets your soul in perfect harmony, away
              from toxic pollution and artificial food. Here, we serve natural
              food with homemade traditional recipes passed down through
              generations of the Baphna family of Dahanu. Our eco-friendly
              cottages, built without cement, chemicals, or plastic, offer a
              unique experience with pillows infused with neem leaves and dohars
              colored with natural dyes for your comfort.
            </p>
            <p className="text-lg text-left">
              Come to Aatmann Dahanu and experience a "From nature with nature"
              concept.
            </p> */}
            
          {/* </div> */}
          {/* <img
            src={bapan}
            alt="Punamchandji Dhanrajji Baphna"
            className=" md:w-2/5 lg:w-2/5 w-full md:p-0 lg:p-0 p-10 object-cover"
          /> */}
        {/* </div> */}
      {/* </div> */}
    </section>
  );
}

export default Tribute;
