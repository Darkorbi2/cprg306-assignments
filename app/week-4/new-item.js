"use client";

import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

    const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div class="flex items-center justify-center h-screen place-items-center">
      <p className="bg-white text-black py-2 px-4">Count: {quantity}</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={increment} disabled={quantity >=20}>Increment</button>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={decrement} disabled={quantity <=1}>Decrement</button>
    </div>
  );
}
