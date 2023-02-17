import { useContext, Fragment, useEffect } from "react";
import { CartContext } from "./cartContext";
import { Transition } from "@headlessui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import { cartItem } from "../../types/typing";
import { urlFor } from "../../client";
import { HiXMark } from "react-icons/hi2";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
  const {
    cartOpen,
    cartItem,
    toggleCartOpen,
    toggleCartItemQty,
    removeFromCart,
  } = useContext(CartContext);

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
      ></Transition.Child>
      <Transition.Child
        as={Fragment}
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        enter="duration-300"
        leaveFrom="translate-x-0"
        leave="duration-300"
        leaveTo="translate-x-full"
      >
        <aside className=" w-10/12 fixed top-0 z-20 right-0 h-screen py-6 px-2 md:px-4 bg-white  max-w-md  ">
          <div className="flex h-full  flex-col justify-between">
            <div>
              <button
                className="inline-flex gap-2 items-center"
                onClick={toggleCartOpen}
              >
                <IoChevronBackOutline className="w-4 md:w-5 aspect-square" />
                <span className="text-base md:text-lg font-medium">
                  Your Cart{" "}
                  <span className="text-red-500">
                    ({cartItem.reduce((prev, cr) => prev + cr.qty, 0)} items)
                  </span>
                </span>
              </button>
              <div className="flex flex-col gap-4 mt-8">
                {cartItem.map((e, i) => (
                  <CartItem
                    data={e}
                    key={i}
                    qtyHandler={toggleCartItemQty}
                    deleteHandler={removeFromCart}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="w-full flex px-4 flex-col items-center">
                <div className="flex px-2 justify-between w-full">
                  <span className="text-lg md:text-xl font-bold ">Subtotal : </span>
                  <span className="text-lg md:text-xl font-bold ">
                    $
                    {cartItem.reduce(
                      (prev, cr) => prev + cr?.product?.price * cr?.qty,
                      0
                    ).toFixed(1)}
                  </span>
                </div>
                <button className="bg-orange-600 w-8/12 py-2 rounded-xl text-white mt-8 text-lg">Pay with stripe</button>
              </div>
            </div>
          </div>
        </aside>
      </Transition.Child>
    </Transition>
  );
};

const CartItem = ({
  data,
  qtyHandler,
  deleteHandler,
}: {
  data: cartItem;
  qtyHandler: (id: string, type: "inc" | "dec") => void;
  deleteHandler: (id: string) => void;
}) => {
  return (
    <div className="flex">
      <div className="flex gap-4 w-full">
        <img
          src={urlFor(data.product.image[0])}
          alt=""
          className="w-[80px] sm:w-[100px] bg-product rounded-xl"
        />
        <div className="flex flex-col justify-between py-2">
          <h3 className="font-bold text-sm sm:text-xl">{data.product.name}</h3>
          <div className="flex gap-4">
            <button
              className="border border-black px-1"
              onClick={() => qtyHandler(data.id, "dec")}
            >
              <AiOutlineMinus className="w-3 aspect-square md:w-5" />
            </button>
            <span className="text-sm sm:text-lg">{data.qty}</span>
            <button
              className="border border-black px-1"
              onClick={() => qtyHandler(data.id, "inc")}
            >
              <AiOutlinePlus className="w-3 aspect-square md:w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-between py-2 items-end">
        <span className="font-medium text-sm sm:text-lg">
          ${data.product.price}
        </span>
        <button
          onClick={() => deleteHandler(data.id)}
          className="border border-black rounded-full"
        >
          <HiXMark className="w-3 h-3 sm:w-4 sm:h-4 " />
        </button>
      </div>
    </div>
  );
};

export default Cart;
