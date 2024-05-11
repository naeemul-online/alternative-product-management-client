import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Main content */}

      <div className="min-h-[calc(100vh-208px)]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
