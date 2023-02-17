import { useState, createContext } from "react";
import { cartItem, Product } from "../../types/typing";

interface AppContext {
  cartOpen: boolean;
  cartItem: cartItem[];
  toggleCartOpen: () => void;
  closeCartOpen: () => void;
  addToCart: ({ product, qty }: { product: Product; qty: number }) => void;
  removeFromCart: (id: string) => void;
  toggleCartItemQty : (id: string, type: "inc"|"dec") => void
}

export const CartContext = createContext<AppContext>({
  addToCart: () => {},
  closeCartOpen: () => {},
  removeFromCart: () => {},
  toggleCartOpen: () => {},
  toggleCartItemQty : () => {},
  cartItem: [],
  cartOpen: false,
});

const AppState = ({ children }: { children: React.ReactNode }) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItem, setCartItem] = useState<cartItem[]>([]);

  const toggleCartOpen = () => {
    setCartOpen((prev) => {
      document.body.classList.toggle("overflow-y-hidden");
      return !prev;
    });
  };
  const closeCartOpen = () => {
    setCartOpen(false);
  };

  const addToCart = ({
    product: p,
    qty,
  }: {
    product: Product;
    qty: number;
  }) => {
    setCartItem((prev) => {
      const isExist = [...prev].find(({ product }) => product._id === p._id);
      if (isExist) {
        return [
          ...[...prev].filter(({ product }) => product._id !== p._id),
          { id: isExist.id, product: isExist.product, qty: qty + isExist.qty },
        ];
      }
      return [
        ...prev,
        { id: new Date().getTime().toString(), product: p, qty },
      ];
    });
  };

  const toggleCartItemQty = (id: string, type: "inc" | "dec") => {
    switch (type) {
      case "inc":
        setCartItem((prev) =>
          [...prev].map((item) => {
            if (item.id === id) {
              return { id, product: item.product, qty: item.qty + 1 };
            }
            return { id: item.id, product: item.product, qty: item.qty };
          })
        );
        break;
      case "dec":
        setCartItem((prev) =>
          [...prev].map((item) => {
            if (item.id === id) {
              return { id, product: item.product, qty: item.qty - 1 };
            }
            return { id: item.id, product: item.product, qty: item.qty };
          })
        );

        break;
    }
  };

  const removeFromCart = (id: string ) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        cartItem,
        toggleCartOpen,
        closeCartOpen,
        addToCart,
        removeFromCart,
        toggleCartItemQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default AppState;
