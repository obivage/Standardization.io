import LandingPage from "../Pages/landingPage";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import Layouts from "../layouts";
import { Children } from "react";

const authRoutes = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        element: <LandingPage />,
        path: "",
        index: true,
      },
      {
        element: <Shop />,
        path: "/shop/:id",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
];

export { authRoutes };
