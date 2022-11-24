import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../../../Assets/LoginAnimation.json";
import background from "../../../Assets/loginForm.png";
import { AuthContext } from "../../../Context/AuthProvider";
const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [loginError, setLoginError] = useState("");
  // const [loginUserEmail, setLoginUserEmail] = useState("");

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <section
      className="min-h-screen flex justify-center items-center"
      style={{ background: `url(${background})` }}
    >
      <div className="sm:hidden md:block w-1/2">
        <Lottie animationData={loginAnimation} />
      </div>
      <div className="w-96 p-8 ">
        <div>{loginError && <p className="text-error">{loginError}</p>}</div>
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
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
              })}
              type="password"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-xs text-error">{errors.password?.message}</p>
            )}
            <label className="label mb-2">
              <span className="text-xs">Forget Password?</span>
            </label>
          </div>

          <input
            className="btn btn-neutral w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-4 text-sm text-center">
          New User ?{" "}
          <Link className="text-primary" to="/signup">
            {" "}
            Create a new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </section>
  );
};

export default SignIn;
