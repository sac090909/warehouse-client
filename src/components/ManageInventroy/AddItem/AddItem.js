import React from "react";
import { Link } from "react-router-dom";

const AddItem = () => {
  return (
    <div>
      <Link
        className=" text-dark text-decoration-none text-center d-block "
        to="/addnewitem"
      >
        <button className=" my-5 rounded w-25">Add New Item</button>
      </Link>
    </div>
  );
};

export default AddItem;
