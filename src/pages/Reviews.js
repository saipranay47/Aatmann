import React from "react";
import VideoTestimonials from "../components/VideoTestimonials";
import FeedbackCard from "../components/FeedbackCard";

function Reviews() {

  const reviewsData = [
    {
      name: "Mayank Masdekar",
      review: "It was such an amazing experience, right from the food and ambience to the caring and personalized hospitality of everyone at Aatmann, would like to specially thank Kirti and Sampann for this sensual experience. Kudos to Aatmann!!! We will definitely visit again. Thank you."
    },
    {
      name: "Rushi Patel",
      review:
        "We had a nice weekend. The food was really tasty and homely. The owner and the staff was really attentive to our needs. The accommodation was good too. Had a great time sitting at the machan (tree house).",
    },
    {
      name: "Vilas Parmar ",
      review:
        "Aatmann farm experience was very nice and we spend memorable time with this farm. They provided multiple varities of organic food with delicious taste. The owner of this Farm, Mr.Ajay is very nice and attentive person. Love to visit this farm again in the future.",
    },
    {
      name: "BHUPESH NAYAR",
      review:
        "Great quality  and quantity of food, polite and helpful staff, decent pricing nice place for family get together. It's  located in heart of nature.",
    },
    {

      name: "Sajid Contractor ",
      review:
        "Warm hospitality. Fresh vegetables that I have never ever had during my life time. Fresh food was served. Menu was highlighted before meals.Farm house was too good. Rooms near and clean. The toiletries were non chemical. Definitely to be revisited. Very respectful Baphna family. Not to be missed during the rain. ",

    },
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
    }
  ];

  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col p-5 md:p-0"

    >
      <div className="h-full lg:py-28 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd md:text-center mt-3 ">
          Real Stories from{" "}
          <span className=" font-normal italic font-pd text-or ">
            Our Happy Customers
          </span>
        </h1>
        <br />
        <p className=" text-tex  text-lg max-w-4xl md:text-center">
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
          <VideoTestimonials />
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
