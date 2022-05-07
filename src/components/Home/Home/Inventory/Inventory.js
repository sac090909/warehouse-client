import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = (props) => {
  const { name, _id, picture, price, quantity, supplierName, description } =
    props.inventory;

  const navigate = useNavigate();
  const handleInventoryItemNavigate = (id) => navigate(`/inventory/${id}`);

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
              Update Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
