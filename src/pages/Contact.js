import React from "react";
import FAQSection from "../components/FAQSection";
import Whatsapp from "../components/Whatsapp";

function Contact() {
  return (
    <section
      className=" min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: "url(./noice.png)",
      }}
    >
      <div className="flex flex-col md:flex-row w-full text-tex p-5">
        <div className="md:w-7/12 p-4">
          <h1 className="text-4xl font-black sm:text-4xl md:text-6xl lg:text-7xl text-tex font-pd mb-8">
            Contact{" "}
            <span className=" font-normal italic font-pd text-or ">us</span>
          </h1>
          <div className="flex w-full items-center justify-between flex-wrap lg-mb-0 max-w-2xl">
            <div className="">
              <p className="uppercase">Phone</p>
              <p className="text-3xl">+91 87660 15085</p>
            </div>
            <div className="">
              <p className="uppercase">Email</p>
              <p className="text-3xl">aatmanndahanu@gmail.com</p>
            </div>
          </div>
          <FAQSection />
        </div>
        <div className="md:w-5/12 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.582425410932!2d72.76501081491548!3d19.98405588657353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7275e1e01dbfd%3A0xf227b11b95ee77f8!2sAatmann%20Dahanu!5e0!3m2!1sen!2sin!4v1679494093237!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
