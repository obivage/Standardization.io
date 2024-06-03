import { Outlet } from "react-router-dom";
import Menu from "../Pages/Menu";
import Footer from "../components/Footer";
// import Products from "../components/Products";

const Layouts = () => {
  return (
    <div className="landing-flex">
      <div>
        <Menu />
      </div>
      <main>
        <Outlet />
      </main>
      {/* <Products /> */}
      <Footer />
    </div>
  );
};

export default Layouts;
