import React from "react";

import Select from "./ui/Select";

const Book = ({
  options,
  onShelfChange,
  title,
  imageUrl,
  authors,
  shelf,
  id
}) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url("")`
        }}
      />
      <div className="book-shelf-changer">
        <Select
          options={options}
          value={shelf}
          onChange={e => onShelfChange(id, e.target.value)}
        />
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{authors.join(",")}</div>
  </div>
);

export default Book;
