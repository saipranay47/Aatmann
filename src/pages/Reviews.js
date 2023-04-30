import React from "react";
import VideoTestimonials from "../components/VideoTestimonials";
import FeedbackCard from "../components/FeedbackCard";

function Reviews() {

  const reviewsData = [
    {
      name: "Hanish Ved",
      review:
        "One of the best farm stays we have experienced. The hospitality extended by the family is exceptional. They ensure you are taken care of completely. The farm visits are well planned, and the cottages are spacious and well maintained. The food is fresh, kid-friendly, and everything is from the farm. Highly recommended.",
    },
    {
      name: "Nidhi Shah",
      review:
        "One of the best experiences I have ever had! We celebrated our anniversary at Aatmann Dahanu and it was the best decision. The food, hospitality, ambience, and services provided were outstanding. They offer 100% organic food without any compromise on taste. Highly recommend Aatmann to all.",
    },
    {
      name: "Naina Hiranandani",
      review:
        "We had a wonderful New Years celebration at Aatmann Dahanu as a family of 8. The warm hosts ensured our comfort and satisfaction with delicious vegetarian spread, high quality ingredients, and top-notch service. The cottages are lovely, and the pool and games room are great. Highly recommended for a getaway.",
    },
    {
      name: "Palak Mehta",
      review:
        "Beautiful, serene farm stay. The food is pure, organic, and delicious. The host family is very warm and caring, making it feel like a home away from home. They arranged a special candlelight dinner for my birthday on a tree house. The staff and chef are very humble. Must visit place.",
    },
    {
      name: "Hitesh Kumar",
      review:
        "Aatmann surpassed all other farm stays and ethnic resorts we've visited. The food, prepared with passion, and organic and healthy cooking made it a memorable experience. The pollution-free area provides fresh air, making the overall experience very holistic and authentic.",
    },
    {
      name: "Tarang Parikh",
      review:
        "Best place for nature lovers. A perfect place for peace and calm, with exceptional hospitality and food. Everything in the property is related to nature. Thankful to Kirti Mam for making us feel at home. Highly recommend!",
    },
    {
      name: "Praveen Sharma",
      review:
        "Beautiful stay at Aatmann Dahanu, a great place for nature lovers. Ajayji, the owner, is very helpful, and the staff provides delicious home-cooked organic food. Enjoyed every bit of it. Go for this accommodation without any doubt!",
    },
    {
      name: "Tanya Shah",
      review:
        "Our experience at Aatman was very pleasant. The hosts are very welcoming and took good care of us. The property is clean and hygienic, and the food is organic and healthy. If you are a nature lover, this is the place for you. Highly recommend for a perfect weekend.",
    },
  ];

  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      
    >
      <div className="h-full lg:py-28 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd text-center ">
          Real Stories from{" "}
          <span className=" font-normal italic font-pd text-or ">
            Our Happy Customers
          </span>
        </h1>
        <br />
        <p className=" text-tex  text-lg max-w-4xl text-center">
          Check out our video testimonials from real customers who have
          experienced our products and services. See how we've helped them
          achieve their goals and why they keep coming back.
        </p>
      </div>
      {/* <ImageGallery /> */}
      <section
        className="flex justify-center w-full flex-wrap"
        
      >
        <div className=" lg:w-1/2 p-5 lg:pt-0 max-w-xl lg:sticky top-32 h-full w-full ">
          <VideoTestimonials/>
        </div>
        <div className="lg:w-1/2 min-w-[300px] w-full">
          <div className="grid grid-cols-1 gap-6  p-4 pt-0">
            {reviewsData.map((review, index) => (
              <FeedbackCard
                key={index}
                testimonial={review.review}
                author={review.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <VideoTestimonials /> */}
    </section>
  );
}

export default Reviews;
