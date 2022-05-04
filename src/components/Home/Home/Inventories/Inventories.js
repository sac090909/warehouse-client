import React from "react";
import { Link } from "react-router-dom";

import useInventories from "../../../hooks/userInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useInventories();
  return (
    <div>
      <h3 className="text-center my-5">Our Inventory </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto px-5">
        {inventories.slice(0, 6).map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
