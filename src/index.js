import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/41cF-Khdv+L.jpg",
    title: "Apples Never Fall",
    author: "Liane Moriarty",
  },
];

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
  //onClick, onMouseOer
  const clickHandler = () => {
    alert("Hellow World");
  };
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Cick me!
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
