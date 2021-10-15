import React from "react";
import ReactDom from "react-dom";

function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>I Love You to the Moon and Back</h1>
}

// const Author = () => {
//   return <h4>
//     Amelia Hepworth
//   </h4>
// }
ReactDom.render(<Booklist />, document.getElementById("root"));
