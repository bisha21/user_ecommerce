import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import AppLayout from "./layout/AppLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  PRODUCTS_ROUTE,
  REGISTER_ROUTE,
  SHOPPING_CART_ROUTE,
} from "./constants/routes";
import List from "./pages/products/List";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Details from "./pages/products/Details";
import AuthLayout from "./layout/AuthLayout";
import UnAuthLayout from "./layout/UnauthLayout";
import Add from "./pages/products/Add";
import EditProduct from "./pages/products/Edit";
import Cart from "./pages/Cart";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <AuthLayout />, // Auth-protected routes
          children: [
           
            {
              path: ABOUT_ROUTE,
              element: <About />,
            },
            {
              path: CONTACT_ROUTE,
              element: <Contact />,
            },
            {
              path: PRODUCTS_ROUTE,
              children: [
                {
                  index: true,
                  element: <List />,
                },
                {
                  path: ":id",
                  element: <Details />,
                },
                {
                  path: "add",
                  element: <Add />,
                },
                {
                  path: "edit/:id",
                  element: <EditProduct />,
                },
              ],
            },
            {
              path: SHOPPING_CART_ROUTE,
              element: <Cart />,
            },
          ],
        },
        {
          element: <UnAuthLayout />, // Unauthenticated routes
          children: [
            {
              path: LOGIN_ROUTE,
              element: <Login />,
            },
            {
              path: REGISTER_ROUTE,
              element: <Registration />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
