import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import data from "./data.json";
import type { CartItem, ProductItem } from "./types";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  // State to control the visibility of the confirmation modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addToCart(product: ProductItem) {
    setCart((prevCart) => {
      // check if item is already in the cart
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        // If it exists, map over the cart and ,= the quantity of that item
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productName: string, amount: number) {
    setCart((prevCart) => {
      return (
        prevCart
          .map((item: any) => {
            if (item.name === productName) {
              return { ...item, quantity: item.quantity + amount };
            }
            return item;
          })
          // Filter out any items where the quantity has dropped to 0 or less
          .filter((item) => item.quantity > 0)
      );
    });
  }

  function handleConfirmOrder() {
    // open confirmation model
    if (cart.length > 0) {
      setIsModalOpen(true);
    }
  }

  const handleNewOrder = () => {
    // Reset the cart and close the modal
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 sm:p-18 font-redhat sm:flex sm:items-start gap-3 bg-rose-50">
      <div className="basis-3/4">
        <h1 className="font-bold text-2xl mb-6">Desserts</h1>
        <ProductList
          products={data}
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      </div>
      <Cart cart={cart} setCart={setCart} onConfirmOrder={handleConfirmOrder} />
      {isModalOpen && (
        <ConfirmationModal
          cart={cart}
          onNewOrder={handleNewOrder}
          setModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default App;
