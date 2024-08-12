import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Banner from "../BannerPage/Banner/Banner";
import BannerPage from "../BannerPage/BannerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"}></Navigate>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/banner",
        element: <BannerPage />,
      },
    ],
  },
]);

export default router;
