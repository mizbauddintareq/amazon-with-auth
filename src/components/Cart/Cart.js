import {
  faArrowRightLong,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart, clearCart }) => {
  let quantity = 0;
  let totalPrice = 0;
  let shippingCharge = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }

  const tax = parseFloat((totalPrice * 0.1).toFixed(2));

  const grandTotal = totalPrice + shippingCharge + tax;

  return (
    <div className="bg-orange-200 p-7 lg:fixed">
      <h1 className="text-3xl font-semibold text-center">Order Summery</h1>
      <div className="text-xl my-10 ">
        <p>Selected Items: {quantity}</p>
        <p className="my-4">Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${shippingCharge}</p>
        <p className="my-4">Tax: ${tax}</p>
      </div>
      <h3 className="text-2xl font-semibold mb-12">
        Grand Total: ${grandTotal}
      </h3>

      <button
        onClick={clearCart}
        className="btn btn-wide hover:bg-red-500 bg-red-500 border-0"
      >
        Clear Cart
        <span className="ml-2">
          <FontAwesomeIcon icon={faTrashCan} size="lg" />
        </span>
      </button>
      <button className="btn btn-wide hover:bg-orange-400 my-4 border-0 bg-orange-400">
        Review Order
        <span className="ml-2">
          <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
        </span>
      </button>
    </div>
  );
};

export default Cart;
