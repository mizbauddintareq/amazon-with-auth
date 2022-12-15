import { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  // const { products, count } = useLoaderData();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
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

    const exist = cart.find((product) => product._id === selectedProduct._id);

    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <>
      <div className="lg:flex w-11/12 mx-auto p">
        <div className="basis-3/4 mt-10">
          <div className="lg:grid lg:grid-cols-3  gap-4">
            {products.map((pd) => (
              <Product key={pd._id} product={pd} handleCart={handleAddToCart} />
            ))}
          </div>
        </div>
        <div className="basis-1/4 lg:ml-10">
          <Cart cart={cart} clearCart={clearCart} />
        </div>
      </div>
      <div className="flex justify-center my-10">
        {[...Array(pages).keys()].map((num) => (
          <div className="btn-group" key={num}>
            <button
              className={`${page === num && "btn btn-active"} btn mx-1`}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          </div>
        ))}
        <select
          className="select-warning select"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </>
  );
};

export default Shop;
