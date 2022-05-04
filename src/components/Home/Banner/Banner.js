import React from "react";
import pic from "../../../images/banner-6.jpg";

const Banner = () => {
  return (
    <div>
      <img
        className="my-5 rounded mx-auto d-block img-fluid px-5"
        src={pic}
        alt=""
      />
    </div>
  );
};

export default Banner;
