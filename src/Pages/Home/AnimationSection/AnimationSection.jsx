import Lottie from "lottie-react";
import React from "react";
import img1 from "../../../Assets/AnimationSection/Auto-Loan1.png";
import CarAnimation from "../../../Assets/AnimationSection/CarAnimation.json";
import img2 from "../../../Assets/AnimationSection/Check-Balances.png";
import img3 from "../../../Assets/AnimationSection/Payday-Loan.png";

const AnimationSection = () => {
  const animationData = [
    {
      id: 1,
      img: img1,
      title: "Get the Fill Car Details",
    },
    {
      id: 2,
      img: img2,
      title: "Get Response From Us",
    },
    {
      id: 3,
      img: img3,
      title: "Proceed Your Payment",
    },
  ];
  return (
    <section className="mb-10">
      <h1 className="text-3xl text-center mt-16">
        Easy And Secure Transaction
      </h1>
      {/* Whole Section */}
      <div className="flex flex-col md:flex-row justify-center   items-center mt-4">
        <div className="w-1/2">
          <Lottie animationData={CarAnimation} />
        </div>
        <div>
          {animationData.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center pt-5"
            >
              <img className="w-20 mr-10" src={item.img} alt="" />
              <div>
                <h1 className="text-3xl">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;
