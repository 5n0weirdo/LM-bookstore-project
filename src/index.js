import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    image: "https://m.media-amazon.com/images/I/41cF-Khdv+L.jpg",
    title: "Apples Never Fall",
    author: "Liane Moriarty",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { image, title, author } = book;
        return (
          <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h6>{author}</h6>
          </div>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  //destructure:
  const { image, title, author } = props;

  console.log(props);
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
