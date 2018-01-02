import React from "react";

import BookList from "../BookList";

const Shelve = ({ title, books, onShelfChange }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BookList books={books} onShelfChange={onShelfChange} />
    </div>
  </div>
);

export default Shelve;
