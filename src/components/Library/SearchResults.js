import React, { Component } from "react";
import { compose } from "recompose";

import BookList from "../BookList";
import WithBookShelfUpdater from "../hoc/WithBookShelfUpdater";
import UpdateBook from "../Queries/UpdateBook";
import AllBooksQuery from "../Queries/AllBooksQuery";
import SearchQuery from "../Queries/SearchQuery";
import Loading from "../ui/Loading";

class SearchResults extends Component {
  render() {
    const { loading, books, shelfByBookId, onShelfChange } = this.props;

    return loading ? (
      <Loading />
    ) : (
      <BookList
        onShelfChange={onShelfChange}
        books={books.map(b => ({
          ...b,
          shelf: shelfByBookId[b.id] || ""
        }))}
      />
    );
  }
}

const mapBooksShelves = ({ loading, books }) => {
  if (loading) return { shelfByBookId: {} };
  return {
    shelfByBookId: books.reduce(
      (acc, book) => ({ ...acc, [book.id]: book.shelf }),
      {}
    )
  };
};

export default compose(
  AllBooksQuery({ mapResultsToProps: mapBooksShelves }),
  SearchQuery,
  UpdateBook,
  WithBookShelfUpdater
)(SearchResults);
