import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../hooks/userInventories";

const AddNewItem = () => {
  const [inventories, setInventories] = useInventories();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      picture: event.target.picture.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      itemSold: parseInt(event.target.itemSold.value),
      supplierName: event.target.supplierName.value,
      description: event.target.description.value,
    };

    fetch(`http://localhost:4001/inventory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setInventories(result));
    navigate("/manageinventory");
  };

  return (
    <div>
      <form
        onSubmit={() => handleSubmit()}
        className="w-50 mx-auto d-block my-5 border p-5 rounded-4 shadow-sm bg-body "
      >
        <h4 className="text-center text-secondary">Add New Item</h4>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="url"
            name="picture"
            className="form-control"
            placeholder="picture url"
            required
          />
        </div>

        {/* <div className="mb-3">
          <select className="form-control" name="picture">
            <optgroup label="IEKA">
              <option value="https://i.ibb.co/GvNHpy8/outdoor-7.jpg">
                Outdoor
              </option>
              <option value="https://i.ibb.co/ft8QVw1/living-room-1.jpg">
                Living Room
              </option>
            </optgroup>
          </select>
        </div> */}

        <div className="mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="price"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="quantity"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="quantity"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="itemSold"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="item sold"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="supplierName"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="supplier name"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="description"
            required
          />
        </div>

        <button type="submit" className="btn btn-secondary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewItem;
