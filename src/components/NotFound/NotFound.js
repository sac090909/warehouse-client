import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404page.jpg";

const NotFound = () => {
  return (
    <div className="max-auto d-block text-center my-5">
      <h3 className="mb-3">404 : Sorry, Page Not Found !</h3>
      <img className="image-fluid rounded mx-2" src={notfound} alt="" />
      <p className="my-3">
        Please click{" "}
        <Link className="mx-2" to="home">
          here
        </Link>
        to go home page.
      </p>
    </div>
  );
};

export default NotFound;
