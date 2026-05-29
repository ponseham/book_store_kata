import { books } from "./books";

export default function BookList({ addToBasket }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <h3>{book.title}</h3>
          <button className="btn" onClick={() => addToBasket(book)}>
            Add to Basket
          </button>
        </div>
      ))}
    </div>
  );
}
