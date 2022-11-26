import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useToken from "../../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signUp, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDb(data.email, data.name);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const saveUserToDb = (email, name) => {
    const user = { email, name };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <section className="min-h-screen flex justify-center items-center">
        <div className="w-96 p-8">
          <h2 className="text-xl font-semibold text-center">SignUp </h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="name"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-error text-xs">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-error text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Z].)(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/,
                    message: "password must be strong",
                  },
                })}
                type="password"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-xs text-error">{errors.password?.message}</p>
              )}
            </div>

            <input
              className="btn btn-neutral mt-4 w-full"
              value="Sign up"
              type="submit"
            />
            {signUpError && <p className="text-error">{signUpError}</p>}
          </form>
          <p className="mt-4 text-sm text-center">
            Have an account ?{" "}
            <Link className="text-primary" to="/login">
              {" "}
              Login Now
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
