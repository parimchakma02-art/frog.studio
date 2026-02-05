import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";

import About from "../page/About";
import Home from "../page/Home";
import Work from "../page/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:  "work",
        element: <Work />
      }
    ],
  },
]);
