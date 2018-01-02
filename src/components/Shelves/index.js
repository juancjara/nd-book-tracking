import React, { Component } from "react";
import { compose } from "recompose";

import WithBookShelfUpdater from "../hoc/WithBookShelfUpdater";
import AllBooksQuery from "../Queries/AllBooksQuery";
import UpdateBook from "../Queries/UpdateBook";
import { CATEGORIES } from "../../constants";
import Shelve from "./Shelve";
import AddBook from "./AddBook";
import Loading from "../ui/Loading";

class Shelves extends Component {
  render() {
    const { books, loading, onShelfChange } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="list-books-content">
            {CATEGORIES.map(({ label, value }) => (
              <Shelve
                key={value}
                title={label}
                onShelfChange={onShelfChange}
                books={books.filter(b => b.shelf === value)}
              />
            ))}
          </div>
        )}
        <AddBook to="/search" />
      </div>
    );
  }
}

export default compose(AllBooksQuery(), UpdateBook, WithBookShelfUpdater)(
  Shelves
);
