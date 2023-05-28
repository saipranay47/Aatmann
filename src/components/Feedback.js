import React from "react";
import FeedbackCard from "./FeedbackCard";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="items-end justify-between sm:flex">
        <div class="max-w-xl">
          <h1 className="text-3xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd lg:mb12">
            Read trusted reviews
            <span className=" font-normal italic font-pd text-or ">
              {" "}
              from our customers
            </span>
          </h1>

          {/* <p class="mt-8 max-w-lg text-tex">
            Discover what our customers have to say about their stay at Aatmann
            Farm Stay by reading our trusted reviews. Our valued guests share
            their honest and detailed feedback about their experience,
            highlighting the quality of our accommodations, the warmth of our
            hospitality, and the beauty of our surroundings. Whether you are
            looking for inspiration or reassurance, our reviews provide a
            glimpse into the unforgettable experiences that await you at Aatmann
            Farm Stay.
          </p> */}
        </div>

        <Link
          to="/reviews"
          class="mr-4 mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-or px-5 py-3 font-medium text-or hover:bg-or hover:text-tex sm:mt-0 lg:mt-8 cursor-pointer"
        >
          Read all reviews
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeedbackCard
          testimonial="We stayed here (as a family of 8) and had a wonderful New Years celebration. This farm is vegetarian (no alcohol is served either). The warm hosts (Bafna family) go out of their way to ensure your comfort and satisfaction – be it with the delicious vegetarian spread, high quality ingredients, cleanliness and top notch service. They accommodated every request with a smile. The cottages are lovely (and recommended) and close to the reception / cafeteria, and the deluxe rooms are a 2 minute walk outside the property. The pool is wonderful, there is a less crowded beach (20 minutes away) and the games room is well stocked. Highly recommended for a getaway from the city."
          author="Naina Hiranandani"
        />
        <FeedbackCard
          testimonial="One of the best experience I have ever had!!

We celebrated our Anniversary at the Aatmann Dahanu and god! It was the best decision we took!

The food, hospitality, ambience & out of the way services provided by Ajay uncle & his staff is too good

The minute we entered the place, we felt at home! They give 100% organic food w/o sugar & maida & totally everything is made / grown in their farms

Was there any compromise on taste? Absolutely zero! We’ve eaten some of the best food there & experienced unique food items (worth trying)

Special occasion or just a getaway from the city, I highly recommend Aatmann to all"
          author="Nidhi Shah"
        />
        <FeedbackCard
          testimonial="exceptional. They ensure you are taken care of completely. The farm visits are very well planned out and they are fabulous experiences for the kids. The cottages are spacious and well maintained and the amenities are very good . The food is fresh, everything is from the farm and kid friendly. The staff is very courteous and friendly.
It's a great experience and worth the visit. The property is serene, the attention from the family is meticulous with a lot of care and the overall experience is   fabulous.

Nearby activities: Farm visits, fruit farm, spices farm, vegetable farm. Side seeing the beach, temple. All well planned by the host.

Food & drinks: Everything was served fresh and made on premise. Very good quality. Kid friendly and attention to detail from the host family."
          author="Hanish Ved"
        />
      </div>
    </div>
  );
}

export default Feedback;
