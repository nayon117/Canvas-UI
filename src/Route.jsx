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
    ],
  },
]);
export default Route;
