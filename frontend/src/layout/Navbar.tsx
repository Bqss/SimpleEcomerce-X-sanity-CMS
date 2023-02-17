import {useContext} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../components/cart/cartContext";

const Navbar = () => {
  const { toggleCartOpen, cartItem } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center px-5 xl:px-10 py-5">
      <Link to={"/"}>
        <span className="text-lg font-medium">Aufal Store</span>
      </Link>
      <button className="relative" onClick={toggleCartOpen}>
        <AiOutlineShoppingCart className="w-6 h-6" />
        <span className="absolute bg-orange-600 rounded-full pointer-events-none px-1 text-xs -top-2 -right-2 text-white ">
          {cartItem.reduce((prev, cr) => prev + cr.qty, 0)}
        </span>
      </button>
    </div>
  );
};

export default Navbar;
