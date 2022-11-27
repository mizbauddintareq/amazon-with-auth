import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleCart }) => {
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-lg font-semibold">Price: ${price}</h3>
        <p>Manufacturer : {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button
        onClick={() => handleCart(product)}
        className="bg-orange-200 py-2 font-semibold"
      >
        Add To Card
        <span className="ml-2">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </span>
      </button>
    </div>
  );
};

export default Product;
