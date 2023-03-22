import React from "react";

function FeedbackCard({ rating, testimonial, author }) {
  return (
    <blockquote className="flex h-full flex-col bg-[#fbfbfbb3] p-12 justify-start rounded-xl">
      <div className="mt-4">
        <h3 className="text-xl font-bold text-black sm:text-2xl">{author}</h3>

        <p className="mt-4 text-gray-800">{testimonial}</p>
      </div>
    </blockquote>
  );
}

export default FeedbackCard;
