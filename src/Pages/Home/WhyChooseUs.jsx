import React from "react";
import img1 from "../../Assets/WhyChoose/Auto-Loan-copy.png";
import img2 from "../../Assets/WhyChoose/Funds-Transfer-01-copy.png";
import img3 from "../../Assets/WhyChoose/MORTGA1.png";
import img4 from "../../Assets/WhyChoose/ONLINE1.png";
import PrimaryButton from "../../Components/PrimaryButton";

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      id: 1,
      img: img1,
      title: "Do more From Home",
    },
    {
      id: 2,
      img: img2,
      title: "24 Hours Test Drive",
    },
    {
      id: 3,
      img: img3,
      title: "Money Return Guarantee",
    },
    {
      id: 4,
      img: img4,
      title: "Major System Covered",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row  justify-around items-center  mt-16">
      <div className="bg-base-200 rounded-xl p-10 ">
        {whyChooseData.map((item) => (
          <div key={item.id} className="flex justify-around items-center  m-2">
            <img className="w-20" src={item.img} alt="" />
            <div>
              <h1 className="w-60 pl-4">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-1/2 p-5 md:p-0">
        <h1 className="text-5xl font-black">Why Choose Us</h1>
        <p className="text-xl my-4">
          We believe in giving you the very best service for auto repair that
          you can find. That’s why we seek out and hire the very best auto
          repair technicians. We look for technicians that have strong
          experience with the brands of vehicles we service. We hire those with
          ASE Certified and Master Technician certifications that shows they
          keep current on their training. Experience and expertise translate
          into the job done right the first time and done quicker. By hiring the
          right people, we are able to provide one of the longest auto repair
          warranties in the business — 36 months or 36,000 miles.
        </p>

        <PrimaryButton>Buy Now</PrimaryButton>
      </div>
    </section>
  );
};

export default WhyChooseUs;
