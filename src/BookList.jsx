import { books } from "./books";

export default function BookList() {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <div className="card" key={book.id}>
          <h3>{book.title}</h3>
          <button className="btn">Add to Basket</button>
        </div>
      ))}
    </div>
  );
}
