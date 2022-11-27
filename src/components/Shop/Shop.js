import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const products = useLoaderData();

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      setCart(savedCart);
    }
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];

    const exist = cart.find((product) => product.id === selectedProduct.id);

    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="lg:flex w-11/12 mx-auto p">
      <div className="basis-3/4 mt-10">
        <div className="lg:grid lg:grid-cols-3  gap-4">
          {products.map((pd) => (
            <Product key={pd.id} product={pd} handleCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className="basis-1/4 lg:ml-10">
        <Cart cart={cart} clearCart={clearCart} />
      </div>
    </div>
  );
};

export default Shop;
