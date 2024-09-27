import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type CartItemProps = {
  cartItems: CartItem;
  incrementHandler:(cartItems:CartItem)=>void;
  deccrementHandler:(cartItems:CartItem)=>void;
  removeHandler:(id:string)=>void;

};
const CartItemCard = ({ cartItems ,incrementHandler,deccrementHandler,removeHandler}: CartItemProps) => {
  const { productId, photo, name, price, quantity } = cartItems;
  return (
    <div className="cart-item">
      <img src={`${server}/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button onClick={()=>deccrementHandler(cartItems)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=>incrementHandler(cartItems)}>+</button>
      </div>
      <button onClick={()=>removeHandler(productId)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemCard;
