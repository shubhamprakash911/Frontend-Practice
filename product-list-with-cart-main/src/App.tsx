import { useState } from "react";
import Cart from "./components/Cart";
import Product from "./components/Product";
import data from "./data.json";
import type { CartItem } from "./types";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div className="p-6 sm:p-18 font-redhat sm:flex gap-3 bg-rose-50 min-h-screen">
      <div className="basis-3/4">
        <h1 className="font-bold text-2xl mb-6">Desserts</h1>
        <Product data={data} />
      </div>
      <Cart />
    </div>
  );
}

export default App;
