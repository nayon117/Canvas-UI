import { createBrowserRouter } from "react-router-dom";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

import Alert from "./UIcomponents/Alert/Alert";
import Avatar from "./UIcomponents/Avatar/Avatar";
import Badge from "./UIcomponents/Badge/Badge";
import Button from "./UIcomponents/Button/Button";

import Card from "./UIcomponents/Card/Card";

const Route = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/components",
    element: <ComponentsLayout />,
    children: [
      { path: "introduction", element: <NotFound /> },
      { path: "quickstart", element: <NotFound /> },
      { path: "avatar", element: <Avatar /> },
      { path: "button", element: <Button /> },
      { path: "card", element: <Card /> },
      { path: "badge", element: <Badge /> },
      { path: "alert", element: <Alert /> },
    ],
  },
]);
export default Route;
