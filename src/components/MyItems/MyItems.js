import React from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useInventories from "../hooks/userInventories";
import AddItemLink from "../ManageInventroy/AddItemLink/AddItemLink";
import ManageInventory from "../ManageInventroy/ManageInventory/ManageInventory";
import ManageMyInventory from "../ManageInventroy/ManageMyInvetory/ManageMyInventory";

const MyItems = () => {
  const [inventories, setInventories] = useInventories();
  const [user, loading, error] = useAuthState(auth);

  const handleDeleteItem = (id) => {
    const deleteConfirm = window.confirm("Are you sure to delete?");
    if (deleteConfirm) {
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
      <h4 className="text-center mt-5"> My Inventory [{user.email}]</h4>
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
            {inventories.map(
              (inventory) =>
                inventory?.user === user.email ? (
                  <ManageMyInventory
                    key={inventory._id}
                    inventory={inventory}
                    handleDeleteItem={handleDeleteItem}
                  ></ManageMyInventory>
                ) : (
                  ""
                )
              //console.log(user.email, inventory?.user)
            )}
          </tbody>
        </Table>
      </div>
      <AddItemLink></AddItemLink>
    </div>
  );
};

export default MyItems;
