import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ManageInventoryLink from "../ManageInventroy/ManageInventoryLink/ManageInventoryLink";
import { useForm } from "react-hook-form";
import useInventoryDetail from "../hooks/useInventoryDetail";

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetail(id);
  // const {
  //   _id,
  //   name,
  //   quantity,
  //   description,
  //   itemSold,
  //   price,
  //   supplierName,
  //   picture,
  // } = inventory;
  const [restockQuantity, setRestockQuantity] = useState(0);

  const handleDelivered = (id) => {
    const newQuantity = parseInt(inventory.quantity) - 1;
    const updatedQuantity = { newQuantity };

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

        // const { quantity, ...rest } = inventory;

        // const newInventory = { quantity: newQuantity, ...rest };
        // console.log(newInventory);
        // setInventory({ newInventory });
        window.location.reload();
      });
  };
  // const handleQuantity = (event) => {
  //   setRestockQuantity(event.target.value);
  // };
  // console.log(restockQuantity);

  const handleRestock = (event, id) => {
    event.preventDefault();

    const newQuantity = parseInt(event.target.quantity.value);

    const updatedQuantity = { newQuantity };
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
        const { quantity, ...rest } = inventory;
        const newInventory = { quantity: newQuantity, ...rest };
        console.log(newInventory);
        setInventory({ newInventory });
      });
  };

  return (
    <div>
      <div className="col h-100 shadow-sm bg-body rounded w-50 mx-auto my-5">
        <div className="card h-100">
          <div className="card-title card-header bg-transparent text-center text-uppercase fw-bold">
            {inventory?.name}
          </div>

          <img src={inventory?.picture} className="card-img-top" alt="" />
          <div className="card-body text-center h-100">
            <p className="card-text">Item id: {inventory?._id}</p>
            <p className="card-text">Price: {inventory?.price}</p>
            <p className="card-text text-light badge bg-secondary fs-5">
              Quantity: {inventory?.quantity}
            </p>

            <p className="card-text">Item Sold: {inventory?.itemSold}</p>

            <p className="card-text">Supplier: {inventory?.supplierName}</p>
            <p className="card-text"> Description: {inventory?.description}</p>
          </div>

          <button
            className="text-light bg-secondary"
            onClick={() => handleDelivered(inventory._id)}
          >
            Delivered
          </button>
        </div>
      </div>

      <form
        onSubmit={() => handleRestock(inventory._id)}
        className="w-50 mx-auto d-block my-5 border p-3 rounded-4 shadow-sm bg-body "
      >
        <h5 className="text-center text-secondary">Restock {inventory.name}</h5>
        <div className="mb-3">
          <input
            type="number"
            name="quantity"
            className="form-control text-center"
            aria-describedby="emailHelp"
            placeholder="quantity"
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary w-100">
          Submit
        </button>
      </form>

      <ManageInventoryLink></ManageInventoryLink>
    </div>
  );
};

export default InventoryDetail;
