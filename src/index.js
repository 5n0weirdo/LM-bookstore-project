import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const firstBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  image: "https://m.media-amazon.com/images/I/41cF-Khdv+L.jpg",
  title: "Apples Never Fall",
  author: "Liane Moriarty",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          libero iste illum consectetur eveniet ut?
        </p>
        <button>Buy Now!</button>
      </Book>
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  //destructure:
  const { image, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
