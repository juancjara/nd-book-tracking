import React from "react";

import { OPTIONS } from "../constants";
import Book from "./Book";

const BookList = ({ onShelfChange, books }) => (
  <ol className="books-grid">
    {books.length ? (
      books.map(b => (
        <li key={b.id}>
          <Book {...b} options={OPTIONS} onShelfChange={onShelfChange} />
        </li>
      ))
    ) : (
      <h2>No results</h2>
    )}
  </ol>
);

export default BookList;
