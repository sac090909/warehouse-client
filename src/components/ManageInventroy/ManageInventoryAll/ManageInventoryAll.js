import React from "react";
import useInventories from "../../hooks/userInventories";

const ManageInventoryAll = (props) => {
  const { _id, picture, name, price, quantity, itemSold, supplierName } =
    props.inventory;
  const { handleDeleteItem } = props;

  return (
    <tr>
      <td>{_id}</td>
      <td>
        <img
          className="rounded img-thumbnail img-fluid mx-auto d-block "
          style={{ width: "100px" }}
          src={picture}
          alt=""
        />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{itemSold}</td>
      <td>{supplierName}</td>
      <td>
        <button
          onClick={() => handleDeleteItem(_id)}
          className="btn btn-secondary"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageInventoryAll;
