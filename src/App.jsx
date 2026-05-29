import BookList from "./BookList";
import Basket from "./Basket";
import "./styles.css";

function App() {
  return (
    <>
      <header>
        <h1>Book Store</h1>
      </header>
      <div className="container">
        <BookList />
        <Basket />
      </div>
    </>
  );
}

export default App;
