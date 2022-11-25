import React from "react";
import { Link, useRouteError } from "react-router-dom";
import SecondaryOutlineButton from "../../Components/SecondaryOutlineButton";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="min-h-screen flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-error">
            {error.statusText ||
              error?.message ||
              "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
          </p>
          <Link className="p-5" to="/">
            <SecondaryOutlineButton>Back to Homepage</SecondaryOutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
