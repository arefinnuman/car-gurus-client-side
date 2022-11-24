import React from "react";
import img1 from "../../Assets/WhyChoose/Auto-Loan-copy.png";
import img2 from "../../Assets/WhyChoose/Funds-Transfer-01-copy.png";
import img3 from "../../Assets/WhyChoose/MORTGA1.png";
import img4 from "../../Assets/WhyChoose/ONLINE1.png";
import PrimaryButton from "../../Components/PrimaryButton";

const WhyChooseUs = () => {
  return (
    <section className="flex justify-around items-center  mt-16">
      <div className="bg-base-200 p-20 rounded-xl ">
        <div className="flex justify-around items-center m-2">
          <img className="w-20" src={img1} alt="" />
          <div>
            <h1>Do More From Home</h1>
            <p></p>
          </div>
        </div>
        <div className="flex justify-around items-center m-2">
          <img className="w-20" src={img2} alt="" />
          <div>
            <h1>24 Hours Test Drive</h1>
            <p></p>
          </div>
        </div>
        <div className="flex justify-around items-center m-2">
          <img className="w-20" src={img3} alt="" />
          <div>
            <h1>Money Return Guarantee</h1>
            <p></p>
          </div>
        </div>
        <div className="flex justify-around items-center m-2">
          <img className="w-20" src={img4} alt="" />
          <div>
            <h1>Major System Covered</h1>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-5xl font-black">Why Choose Us</h1>
        <p className="text-xl my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          architecto blanditiis porro ea libero iusto earum vitae exercitationem
          inventore velit, aut, itaque quaerat error possimus quos omnis.
          Tempora, omnis voluptatibus.
        </p>

        <PrimaryButton>Buy Now</PrimaryButton>
      </div>
    </section>
  );
};

export default WhyChooseUs;
