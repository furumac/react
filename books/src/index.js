/* https://www.youtube.com/watch?v=4UZrsTqkcW4 */
/* http://localhost:3000/ */

import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import { data } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        // const { img, title, author } = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
