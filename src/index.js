import React from "react";
import ReactDom from "react-dom";


function Booklist() {
  return (
    <Book />
  );
}

const Book = () => {
  return <article>


  </article>
};


ReactDom.render(<Booklist />, document.getElementById("root"));