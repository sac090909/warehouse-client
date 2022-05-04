import ManageInventoryLink from "../../../ManageInventroy/ManageInventoryLink/ManageInventoryLink";
import Banner from "../../Banner/Banner";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <ManageInventoryLink></ManageInventoryLink>
    </div>
  );
};

export default Home;
