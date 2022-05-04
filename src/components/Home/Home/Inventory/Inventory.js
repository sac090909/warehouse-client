import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = (props) => {
  const { name, _id, picture, price, quantity, supplierName, description } =
    props.inventory;

  const navigate = useNavigate();
  const handleInventoryItemNavigate = (id) => navigate(`/inventory/${id}`);

  // const { id } = useParams();
  // const [inventory, setInventory] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:4001/inventory/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setInventory(data));
  // }, [inventory]);

  // const handleDelivered = () => {
  //   if (inventory.quantity) {
  //     const quantity = inventory.quantity - 1;

  //     const updatedQuantity = { quantity };
  //     fetch(`http://localhost:4001/inventory/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(updatedQuantity),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("success", data);
  //       });
  //   }
  // };

  return (
    <div>
      <div className="col h-100 shadow-sm bg-body rounded">
        <div className="card h-100">
          <div className="card-title card-header bg-transparent text-center text-uppercase fw-bold">
            {name}
          </div>
          <img src={picture} className="card-img-top" alt="" />
          <div className="card-body text-center h-100">
            <p className="card-text">id: {_id}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">Quantity: {quantity}</p>
            <p className="card-text">Supplier: {supplierName}</p>
            <p className="card-text"> Description: {description}</p>
          </div>
          <div className="card-footer px-0 py-0">
            <button
              onClick={() => handleInventoryItemNavigate(_id)}
              className="btn btn-secondary w-100"
            >
              Update Stock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
