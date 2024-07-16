import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
