import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import Banner from "../BannerPage/Banner/Banner";
import BannerPage from "../BannerPage/BannerPage";
import ImageCard from "../ImageCard/ImageCard/ImageCard";
import Datapage from "../DataPage/Datapage/Datapage";
import Tech from "../Tech/Tech";
import PrivateRoute from "./PrivateRoute";
import SamePage from "../SamePage/SamePage";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import ModalPage from "../ModalPage/ModalPage/ModalPage";
import ModalMainContent from "../ModalPage/ModalMainContent/ModalMainContent";
import HeaderPro from "../HeaderPro/HeaderPro";

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
      {
        path: "/data",
        element: <Datapage />,
      },
      {
        path: "/imagecard",
        element: <ImageCard />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/page",
        element: <SamePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/modal",
        element: <ModalMainContent />,
      },
      {
        path: "/hdr",
        element: <HeaderPro />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
