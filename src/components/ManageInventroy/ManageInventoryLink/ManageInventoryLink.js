import React from "react";
import { Link } from "react-router-dom";

const ManageInventoryLink = () => {
  return (
    <div>
      <Link
        className=" text-dark text-decoration-none text-center d-block "
        to="/manageinventory"
      >
        <button className=" my-5 rounded w-25">Manage Inventories</button>
      </Link>
    </div>
  );
};

export default ManageInventoryLink;
