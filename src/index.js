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
