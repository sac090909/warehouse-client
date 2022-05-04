import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";
import useInventories from "../../hooks/userInventories";
import ManageInventoryLink from "../../ManageInventroy/ManageInventoryLink/ManageInventoryLink";
import RestockInventory from "../RestockInventory/RestockInventory";

const InventoryDetail = () => {
  const { id } = useParams();
  let [inventory, setInventory] = useInventoryDetail(id);

  const {
    name,
    _id,
    quantity,
    description,
    itemSold,
    price,
    supplierName,
    picture,
  } = inventory;

  const handleDelivered = (id) => {
    const quantity = inventory.quantity - 1;
    const updatedQuantity = { quantity };
    fetch(`http://localhost:4001/inventory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        window.location.reload(false);
      });
  };

  //   const handleCounter = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <div>
      <div className="col h-100 shadow-sm bg-body rounded w-50 mx-auto my-5">
        <div className="card h-100">
          <div className="card-title card-header bg-transparent text-center text-uppercase fw-bold">
            {name}
          </div>

          <img src={picture} className="card-img-top" alt="" />
          <div className="card-body text-center h-100">
            <p className="card-text">Item id: {_id}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text text-light badge bg-secondary fs-5">
              Quantity: {quantity}
            </p>

            <p className="card-text">Item Sold: {itemSold}</p>

            <p className="card-text">Supplier: {supplierName}</p>
            <p className="card-text"> Description: {description}</p>
          </div>
          <RestockInventory></RestockInventory>
          <button
            className="text-light bg-secondary"
            onClick={() => handleDelivered(_id)}
          >
            Delivered
          </button>
        </div>
      </div>
      <ManageInventoryLink></ManageInventoryLink>
    </div>
  );
};

export default InventoryDetail;
