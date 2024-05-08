import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageFooter from "../Shared/Footer/PageFooter";

const Root = () => {
  return (
    <div className="relative z-30 ">
      <Navbar />
      <div className="lg:px-0 px-5">
        <Outlet />
      </div>
      <hr className="w-10/12 mx-auto"/>
      <PageFooter />
    </div>
  );
};

export default Root;
