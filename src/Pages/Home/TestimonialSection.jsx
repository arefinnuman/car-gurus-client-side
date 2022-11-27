import React from "react";
import user1 from "../../Assets/User/user1.jpg";
import user2 from "../../Assets/User/user2.jpg";
import user3 from "../../Assets/User/user3.jpg";

const TestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      img: user1,
      description:
        "Tom and Elliot were amazing and very helpful and went the extra mile! We went to see other car dealerships but due to them being amazing we came back and brought from them!Ashley was also to help us go through all the figures and getting the deal done but the thing we really liked about Ashley is that he was helping keep our 3 year old entertained! Again extremely helpful and made us feel comfortable!Thank you so much to them three guys",
    },
    {
      id: 2,
      name: "Lily Smith",
      img: user2,
      description:
        "Warm welcome from Steve who quickly showed me the car I wanted then sorted me with a deal I was very pleased with. Mohammed Ashfaq (Jay) made the form filling a relaxed and easy process, explaining everything I needed to know. My third car from Carshop and a pleasure doing business with them once again.",
    },
    {
      id: 3,
      name: "Mary Jane",
      img: user3,
      description:
        "Brought a Kia Pro ceed, the sales man told me it came with a full service history. After buying the car I was given the cars paperwork and with regret I read the service history, and well no service history. It was a 2019 model, one service at 5441, then no other service till 22500. Carshop told me they had serviced it before collecting the car, no service stamp in appropriate service book, just a faded stamp which you could not make out or detailed service carried out. Its a poor service with not telling you the truth, but you do get a free cup of tasteless coffee. Please don't buy a car from this compe.",
    },
  ];
  return (
    <div className="mb-10">
      <div className="text-center mt-10">
        <h1 className="text-5xl">Customers Testimonial</h1>
        <p className="text-xl mt-4">
          We are the best in cities, checkout what our customers are saying
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={testimonial.img}
                    alt="img"
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-neutral">{testimonial.name}</h4>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-neutral">
              <p>{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
