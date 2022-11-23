import Lottie from "lottie-react";
import React from "react";
import img1 from "../../../Assets/AnimationSection/Auto-Loan1.png";
import CarAnimation from "../../../Assets/AnimationSection/CarAnimation.json";
import img2 from "../../../Assets/AnimationSection/Check-Balances.png";
import img3 from "../../../Assets/AnimationSection/Payday-Loan.png";

const AnimationSection = () => {
  return (
    <section>
      <h1 className="text-3xl text-center mt-16">
        Easy And Secure Transaction
      </h1>
      {/* Whole Section */}
      <div className="flex justify-center items-center mt-4">
        <div className="w-1/2">
          <Lottie animationData={CarAnimation} />
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center pt-5">
            <img className="w-20 mr-10" src={img1} alt="" />
            <div>
              <h1 className="text-2xl">Get the Fill Car Details</h1>
              <p>Buy From Us</p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <img className="w-20 mr-10" src={img2} alt="" />
            <div>
              <h1 className="text-2xl">Get Response From Us</h1>
              <p>Buy From Us</p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <img className="w-20 mr-10" src={img3} alt="" />
            <div>
              <h1 className="text-2xl">Proceed Your Payment</h1>
              <p>Buy From Us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;
