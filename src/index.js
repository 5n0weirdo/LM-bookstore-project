import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

import { books } from "./books";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  //destructure:
  const { image, title, author } = props;

  //attribute,eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("Order");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const imageHover = () => {
    alert(title);
  };

  return (
    <article className="book">
      <img src={image} onMouseOver={imageHover} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}>Order Now</button>
      <button onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
