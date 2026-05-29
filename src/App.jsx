import BookList from "./BookList";
import Basket from "./Basket";
import "./styles.css";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  return (
    <>
      <header>
        <h1>Book Store</h1>
      </header>
      <div className="container">
        <BookList addToBasket={addToBasket} />
        <Basket basket={basket} />
      </div>
    </>
  );
}

export default App;
