import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

import Blog from "./components/Blog/Blog";
import Sign from "./components/SignIn/SignIn";
import SignIn from "./components/SignIn/SignIn";
import AboutUs from "./components/AboutUs/AboutUs";

import Home from "./components/Home/Home/Home/Home";
import InventoryDetail from "./components/InventoryDetail/InventoryDetail/InventoryDetail";
import ManageInventory from "./components/ManageInventroy/ManageInventory/ManageInventory";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Inventory from "./components/Home/Home/Inventory/Inventory";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>

        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
