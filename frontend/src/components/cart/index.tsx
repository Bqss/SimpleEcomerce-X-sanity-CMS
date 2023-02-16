import  { useContext, Fragment, useEffect } from "react";
import { CartContext } from "./cartContext";
import { Transition } from "@headlessui/react";
import { IoChevronBackOutline } from "react-icons/io5";

const Cart = () => {
  const { cartOpen, cartItem, toggleCartOpen } = useContext(CartContext);

  return (
    <Transition show={cartOpen} as="div">
      <Transition.Child
        as="div"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        enter="duration-300"
        leaveFrom="opacity-100"
        leave="duration-300"
        leaveTo="opacity-0"
        className="inset-0 fixed z-10 backdrop-brightness-50"
      >
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        enter="duration-300"
        leaveFrom="translate-x-0"
        leave="duration-300"
        leaveTo="translate-x-full"
      >
        <aside className=" w-10/12 fixed top-0 z-10 right-0 h-screen py-6 px-4 bg-white  max-w-md  ">
          <div className="flex h-full  flex-col justify-between">
            <div>
              <button
                className="inline-flex gap-2 items-center"
                onClick={toggleCartOpen}
              >
                <IoChevronBackOutline className="w-5 h-5"/>
                <span className="text-lg font-medium">Your Cart <span className="text-red-500">({cartItem.reduce(((prev,cr)=> prev+cr.qty),0)} items)</span></span>
              </button>
              <div className="flex flex-col"></div>
            </div>
            <div>
              <div className="flex justify-between w-full">
                <span>Subtotal : </span>
                <span>${cartItem.reduce((prev,cr) => prev + (cr?.product?.price * cr?.qty),0)}</span>
                <button>Pay with stripe</button>
              </div>
            </div>
          </div>
        </aside>
      </Transition.Child>
    </Transition>
  );
};

export default Cart;
