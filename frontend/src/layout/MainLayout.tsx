import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Cart from "../components/cart";
import { useContext } from "react";
import { CartContext } from "./../components/cart/cartContext";

const MainLayout = () => {
  const { toggleCartOpen, cartItem } = useContext(CartContext);
  return (
    <>
      <Cart />
      <header className="flex justify-between items-center px-5 xl:px-10 py-5">
        <Link to={"/"}>
          <span className="text-lg font-medium">Aufal Store</span>
        </Link>
        <button className="relative" onClick={toggleCartOpen}>
          <AiOutlineShoppingCart className="w-6 h-6" />
          <span className="absolute bg-orange-600 rounded-full pointer-events-none px-1 text-xs -top-2 -right-2 text-white ">
            {cartItem.reduce(((prev, cr) => prev + cr.qty  ),0)}
          </span>
        </button>
      </header>

      <main className="max-w-7xl mt-10 mx-auto px-2">
        <Outlet />
      </main>
      <footer className="flex flex-col gap-2   items-center py-10">
        <span className="">2023 Aufal Store | All Right reserved</span>
        <div className="inline-flex gap-2 items-center">
          <Link to={"/"}>
            <AiFillInstagram className="w-6 h-6" />
          </Link>
          <Link to={"/"}>
            <AiFillFacebook className="w-5 h-5" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
