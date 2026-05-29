import { useState } from "react";
export default function Basket() {
  const [basket, setBasket] = useState([]);
  const total = basket.length * 50;

  return (
    <div className="basket-panel">
      <h2>Your Basket</h2>

      {basket.length === 0 ? (
        <p className="empty">No books added yet</p>
      ) : (
        <ul>
          {basket.map((b, i) => (
            <li key={i}>{b.title}</li>
          ))}
        </ul>
      )}

      <h3>Total: {total}</h3>
    </div>
  );
}
