import React from "react";
import { Link } from "react-router-dom";

const AddBook = ({ to }) => (
  <div className="open-search">
    <Link to={to}>Add a book</Link>
  </div>
);

export default AddBook;
