import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetail";

const RestockInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetail(id);
  const { name, _id, quantity } = inventory;
  // const [quantity, setQuantity] = useState(inventory.quantity);
  // console.log(quantity);

  const handleRestockItem = (event, id) => {
    event.preventDefault();

    const quantity =
      parseInt(event.target.quantity.value) + parseInt(inventory.quantity);

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
        event.target.reset();
        const inventoryRemains = inventory.find(
          (inventory) => inventory._id === id
        );
        setInventory(inventoryRemains);
      });
  };

  return (
    <div>
      <div className="card-footer px-0 py-0 ">
        <form onSubmit={() => handleRestockItem()}>
          <input className="w-75" type="submit" value="Restock" />
          <input
            className="w-25 text-center"
            type="number"
            name="quantity"
            placeholder="quantity"
          />
        </form>
      </div>
    </div>
  );
};

export default RestockInventory;
