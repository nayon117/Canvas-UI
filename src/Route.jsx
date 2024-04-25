import { createBrowserRouter } from "react-router-dom";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Working from "./Pages/working/Working";
import Avatar from "./rootComponents/Avatar/Avatar";
import Button from "./rootComponents/Button/Button";
import Card from "./rootComponents/Card/Card";
import Badge from "./rootComponents/Badge/Badge";
import Alert from "./rootComponents/Alert/Alert";
import Spinner from "./rootComponents/Spinner/Spinner";
import Footer from "./rootComponents/Footer/Footer";
import Pagination from "./rootComponents/pagination/Pagination";
import Nav from "./rootComponents/Nav.jsx/Nav";
import Carousel from "./rootComponents/Carousel/Carousel";
import Modal from "./rootComponents/Modal/Modal";
import Table from "./rootComponents/Table/Table";
import Rating from "./rootComponents/Rating/Rating";
import Form from "./rootComponents/Form/Form";
import Hero from "./rootComponents/Hero/Hero";

const Route = createBrowserRouter([
  { path: "*", element: <Working /> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/components",
    element: <ComponentsLayout />,
    children: [
      { path: "introduction", element: <Working /> },
      { path: "quickstart", element: <Working /> },
      { path: "avatar", element: <Avatar /> },
      { path: "button", element: <Button /> },
      { path: "card", element: <Card /> },
      { path: "badge", element: <Badge /> },
      { path: "alert", element: <Alert /> },
      { path: "spinner", element: <Spinner /> },
      { path:"pagination",element:<Pagination/> },
      {path:"navbar", element:<Nav/>},
      {path:"carousel", element:<Carousel/>},
      {path:"footer", element:<Footer/>},
      {path:"modal", element:<Modal/>},
      {path:"table", element:<Table/>},
      {path:"rating", element:<Rating/>},
      {path:"form", element:<Form/>},
      {path:"hero", element:<Hero/>},


    ],
  },
]);
export default Route;
