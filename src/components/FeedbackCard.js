import React, { useEffect } from "react";

function FeedbackCard({ testimonial, author }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".paragraph");
    elements.forEach((element) => {
      if (element.scrollHeight > element.clientHeight) {
        if (
          element.nextSibling &&
          element.nextSibling.classList &&
          element.nextSibling.classList.contains("showMoreLess")
        ) {
          return; // Exit early if button already exists
        }

        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("showMoreLess");
        button.style.color = "black"
        button.style.textDecoration = "underline"; // Add underline style
        button.style.paddingLeft = "1.5rem"; // Add padding left
        button.style.paddingBottom = "1.5rem"; // Add padding bottom
        button.style.paddingTop = "1rem"; // Add padding bottom
        button.textContent = "read more";
        element.parentNode.insertBefore(button, element.nextSibling);
      } else{

        element.style.paddingBottom = "1.5rem";
      }
    });

    const showMoreLessButtons = document.querySelectorAll(".showMoreLess");
    showMoreLessButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const paragraph = button.previousElementSibling;
        if (paragraph.classList.contains("line-clamp-none")) {
          button.textContent = "read more";
          paragraph.classList.remove("line-clamp-none");
        } else {
          button.textContent = "read less";
          paragraph.classList.add("line-clamp-none");
        }
      });
    });
  }, []);

  return (
    <blockquote className="flex flex-col bg-[#fbfbfbb3] justify-start rounded-xl h-fit">
      <div className="overflow-hidden">
        <h3 className="text-xl font-bold text-black sm:text-2xl p-6 bg-slate-300 rounded-t-xl">
          {author}
        </h3>
        <p className="text-gray-800 line-clamp-6 ransition-all duration-500 paragraph p-6 pb-0">
          {testimonial}
        </p>
      </div>
    </blockquote>
  );
}

export default FeedbackCard;
