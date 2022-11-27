import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Order from "./components/Order.js/Order";
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
          loader: () => fetch("products.json"),
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
