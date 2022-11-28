import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ cars, setCars }) => {
  const { name: carName, img, resalePrice, location } = cars;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;

    const booking = {
      carName: carName,
      buyerName: name,
      resalePrice,
      email,
      phoneNumber,
    };

    fetch("https://car-gurus-server-site.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setCars(null);
          toast.success("Booking confirmed");
        } else {
          toast.error(data.message);
        }
      });

    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={img} alt="" />
          <h3 className="text-lg font-bold text-center mt-6">{carName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <div className="flex justify-evenly">
              <p className="font-bold">$ {resalePrice}</p>
              <p>{location}</p>
            </div>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Your Full Name"
              className="input input-bordered w-full "
              disabled
            />

            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              disabled
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />

            <input type="submit" value="Submit" className="btn w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
