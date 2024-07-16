import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import UserReq from "../components/UserReq";
import AgentReq from "../components/AgentReq";
import Dashboard from "../components/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <MainLayout />,
    children: [
      {
        path: "userReq",
        element: <UserReq />,
      },
      {
        path: "agentReq",
        element: <AgentReq />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
