import { createBrowserRouter } from "react-router-dom";
import ComponentsLayout from "./Layout/ComponentsLayout";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Avatar from './rootComponents/Avatar/Avatar'
import Button from './rootComponents/Button/Button'
import Card from './rootComponents/Card/Card'
import Badge from './rootComponents/Badge/Badge'
import Alert from './rootComponents/Alert/Alert'

 

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
