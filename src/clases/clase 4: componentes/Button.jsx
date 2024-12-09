/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from "react-icons/ai";

function Button(props) {
  return (
    <button
      className="border border-black rounded-md flex items-center justify-center content-between py-2 px-4"
      onClick={() => props.changeTotal?.(Number(props.price))}
    >
      <span className="hidden sm:block mr-2">Add to car</span>
      <i className="">
        <AiOutlineShoppingCart />
      </i>
    </button>
  );
}

export default Button;
