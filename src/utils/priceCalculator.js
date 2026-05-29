const DISCOUNTS = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};
export function calculateTotal(basket) {
  let totalPrice = 0;
  const bookCount = basket.length;
  const uniqueBookCount = new Set(basket.map((b) => b.id)).size;
  let basePrice = uniqueBookCount * 50;
  const discount = getDiscount(uniqueBookCount);
  totalPrice = basePrice * discount;
  let groupingBooks = bookCount - uniqueBookCount;
  return totalPrice + groupingBooks * 50;
}
function getDiscount(uniqueBookCount) {
  const discount = DISCOUNTS[uniqueBookCount] || 0;
  return 1 - discount;
}
