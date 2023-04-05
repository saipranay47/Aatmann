import React from "react";
import FeedbackCard from "./FeedbackCard";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="items-end justify-between sm:flex">
        <div class="max-w-xl">
          <h1 className="text-3xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd lg:mb12 mb-8 ">
            Read trusted reviews
            <span className=" font-normal italic font-pd text-or ">
              {" "}
              from our customers
            </span>
          </h1>

          <p class="mt-8 max-w-lg text-tex">
            Discover what our customers have to say about their stay at Aatmann
            Farm Stay by reading our trusted reviews. Our valued guests share
            their honest and detailed feedback about their experience,
            highlighting the quality of our accommodations, the warmth of our
            hospitality, and the beauty of our surroundings. Whether you are
            looking for inspiration or reassurance, our reviews provide a
            glimpse into the unforgettable experiences that await you at Aatmann
            Farm Stay.
          </p>
        </div>

        <Link
          to="/reviews"
          class="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-or px-5 py-3 font-medium text-or hover:bg-or hover:text-tex sm:mt-0 lg:mt-8 cursor-pointer"
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
          rating={5}
          testimonial="Our experience at this wonderful cottage exceeded all our expectations. The staff were incredibly friendly, and the ambiance was just perfect for a relaxing getaway. We can't wait to come back for another visit!"
          author="Eddie Murphy"
        />
        <FeedbackCard
          rating={2}
          testimonial="From the moment we arrived, we knew we had made the right choice. The breathtaking views, the cozy atmosphere, and the delicious food made our stay truly memorable. The attention to detail and the warm hospitality will definitely bring us back!"
          author="Jane Smith"
        />
        <FeedbackCard
          rating={5}
          testimonial="I can't say enough about the fantastic time we had during our stay at this cottage. The surroundings were serene, the accommodations were top-notch, and the staff went above and beyond to make us feel welcome. It's the perfect escape from the hustle and bustle of city life."
          author="John Doe"
        />
      </div>
    </div>
  );
}

export default Feedback;
