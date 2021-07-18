import React from "react"
import BookListItem from "../book-list-item/book-list-item";
import "./book-list.css";

const BookList = ({books}) => {
  return (
    <ul className="book-list">
      {books.map((book, id) => (
        <li key={id}>
          <BookListItem book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList