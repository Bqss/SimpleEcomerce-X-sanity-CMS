import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Cart from "../components/cart";
import { useContext } from "react";
import { CartContext } from "./../components/cart/cartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {

  return (
    <>
      <Cart />
      <header className=" fixed z-10 inset-x-0 top-0 ">
        <Navbar/>
      </header>

      <main className="max-w-7xl mt-10 mx-auto px-2">
        <Outlet />
      </main>
      <footer className=" py-10">
        <Footer/>
      </footer>
    </>
  );
};

export default MainLayout;
