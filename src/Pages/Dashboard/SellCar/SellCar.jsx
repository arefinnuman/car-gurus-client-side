import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
const SellCar = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const imageHostKey = "41316516c169c0f2cabfe6b243f6f202";

  const navigate = useNavigate();

  const handleSellCar = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const sellingCar = {
            name: data.name,
            img: imgData.data.url,
            description: data.description,
            price: data.price,
            resalePrice: data.resalePrice,
            engineCapacity: data.engineCapacity,
            location: data.location,
            postedTime: new Date().toDateString(),
            postedBy: user.displayName,
            yearsOfUse: data.yearsOfUse,
            category: data.category,
          };

          // Save the doctor information to the database
          fetch(`http://localhost:5000/sell-car`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(sellingCar),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added Successfully`);
              navigate("/dashboard/my-post");
            });
        }
      });
  };

  return (
    <section className="min-h-screen flex justify-center">
      <div>
        <h1 className="text-4xl">Sell Car</h1>
        <form className="form-control " onSubmit={handleSubmit(handleSellCar)}>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="name"
              placeholder=""
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Buying Price</span>
            </label>
            <input
              {...register("price", {
                required: "Price required",
              })}
              type="number"
              placeholder=""
              className="input input-bordered input-secondary w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              {...register("resalePrice", {
                required: "Price required",
              })}
              type="number"
              placeholder=""
              className="input input-bordered input-secondary w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Engine Capacity</span>
            </label>
            <input
              {...register("engineCapacity", {
                required: "Engine Capacity required",
              })}
              type="number"
              placeholder=""
              className="input input-bordered input-secondary w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", {
                required: "Category is required",
              })}
              className="select select-secondary select-bordered w-full"
            >
              <option disabled>Select Your Role</option>
              <option value="suv">Suv</option>
              <option value="sports">Sports Car</option>
              <option value="luxury">Luxury Car</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Years of Use</span>
            </label>
            <input
              {...register("yearsOfUse", {
                required: "Years of Use required",
              })}
              type="number"
              placeholder=""
              className="input input-bordered input-secondary w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", {
                required: "Location required",
              })}
              type="text"
              placeholder=""
              className="input input-bordered  input-secondary w-full "
            />
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description", {
                required: "Description required",
              })}
              type="text"
              placeholder=""
              className="textarea textarea-secondary textarea-bordered w-full "
              rows="4"
              cols="50"
            />
          </div>

          {/* Image */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              {...register("img", {
                required: "Image is required",
              })}
              type="file"
              placeholder=""
              className="input input-bordered input-secondary w-full "
            />
          </div>

          <input
            className="btn btn-accent mt-4 w-full"
            value="Add Car"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default SellCar;
