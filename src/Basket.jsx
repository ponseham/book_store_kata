import { calculateTotal } from "./utils/priceCalculator";

export default function Basket({ basket }) {
  const totalAmount = calculateTotal(basket);

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

      <h3>Total: {totalAmount}</h3>
    </div>
  );
}
