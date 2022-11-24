import React from "react";
import background from "../../Assets/Background.png";
import PrimaryButton from "../../Components/PrimaryButton";

const HomeForm = () => {
  return (
    <section
      className="flex justify-center text-center lg:mt-8 py-24 "
      style={{ background: `url(${background})` }}
    >
      <div>
        <h4 className="text-xl font-bold text-primary">Contact Us</h4>
        <h3 className="text-2xl text-secondary">Stay Connected with us</h3>
        <form className="py-5">
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-6"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="lg:w-[450px] h-[48px] rounded-xl pl-4 mt-5"
            type="text"
            name="subject"
            id=""
            placeholder="Subject"
          />
          <br />
          <textarea
            className="lg:w-[450px] h-[140px] rounded-xl pl-4 my-5"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <br />
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default HomeForm;
