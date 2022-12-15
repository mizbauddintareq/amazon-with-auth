import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Order from "./components/Order.js/Order";
import Registration from "./components/Registration/Registration";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";
import { productsAndCartLoaders } from "./loaders/productsAndCartLoaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("http://localhost:5000/products"),
          element: <Shop />,
        },
        {
          path: "/orders",
          loader: productsAndCartLoaders,
          element: <Order />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
