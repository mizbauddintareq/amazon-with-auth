import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const { initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((pd) => pd._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="lg:flex w-11/12 mx-auto p">
      <div className="basis-3/4 mt-10">
        <div className="md:w-6/12 mx-auto">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            />
          ))}

          {cart.length === 0 && (
            <h3 className="font-semibold text-cyan-400 text-3xl">
              Please{" "}
              <Link to="/" className="text-yellow-500 underline">
                Buy
              </Link>{" "}
              Something
            </h3>
          )}
        </div>
      </div>
      <div className="basis-1/4 lg:ml-10">
        <Cart cart={cart} clearCart={clearCart} />
      </div>
    </div>
  );
};

export default Order;
