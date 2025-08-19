import Footer from "./Footer";
import Navbar from "./Navbar";
import Offer from "./Offer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
