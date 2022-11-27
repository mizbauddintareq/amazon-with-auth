import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, price, quantity, shipping, img } = product;

  return (
    <div className="my-4 flex border-2 rounded-lg p-1">
      <div>
        <img src={img} className="md:h-24" alt="" />
      </div>
      <div className="flex ml-5 items-center justify-between w-full">
        <div>
          <p>{name}</p>
          <p>
            <small>Price :{price}</small>
          </p>
          <p>Quantity: {quantity}</p>
          <p>Shipping: {shipping}</p>
        </div>
        <div className="ml-5">
          <button
            onClick={() => handleRemoveItem(id)}
            className="text-red-500 p-4 rounded-full hover:bg-sky-700 hover:text-white bg-red-300 duration-1000"
          >
            <FontAwesomeIcon icon={faTrashCan} size="2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
