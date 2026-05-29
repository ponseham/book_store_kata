import BookList from "./BookList";
import "./styles.css";

function App() {
  return (
    <>
      <header>
        <h1>Book Store</h1>
      </header>
      <div className="container">
        <BookList />
      </div>
    </>
  );
}

export default App;
