import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <div className="d-flex gap-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
