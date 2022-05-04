import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Inventory from "../../Home/Home/Inventory/Inventory";
import useInventories from "../../hooks/userInventories";
import ManageInventoryAll from "../ManageInventoryAll/ManageInventoryAll";

const ManageInventory = () => {
  const [inventories, setInventories] = useInventories();

  const handleDeleteItem = (id) => {
    const removeConfirm = window.confirm("Are you sure to remove?");
    if (removeConfirm) {
      fetch(`http://localhost:4001/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const inventoryRemains = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(inventoryRemains);
        });
    }
  };

  return (
    <div>
      <h4 className="text-center mt-5">
        {" "}
        Total Inventory : {inventories.length}
      </h4>
      <div className="mx-auto d-block px-5 mt-5">
        <Table responsive="lg">
          <thead>
            <tr>
              <th>Id</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Price$</th>
              <th>Quantity</th>
              <th>Item Sold</th>
              <th>Supplier Name</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <ManageInventoryAll
                key={inventory._id}
                inventory={inventory}
                handleDeleteItem={handleDeleteItem}
              ></ManageInventoryAll>
            ))}
          </tbody>
        </Table>
      </div>
      <Link
        className=" text-dark text-decoration-none text-center d-block "
        to="/addnewitem"
      >
        <button className=" my-5 rounded w-25">Add New Item</button>
      </Link>
    </div>
  );
};

export default ManageInventory;
