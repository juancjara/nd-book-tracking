import React, { Component } from "react";

import * as BooksAPI from "../../BooksAPI";
import { formatBook } from "./formatters";

const AllBooksQuery = (options = {}) => WrappedComponent =>
  class extends Component {
    state = {
      books: [],
      loading: true
    };

    updateBooks = books => {
      this.setState({ books });
    };

    componentDidMount() {
      BooksAPI.getAll()
        .then(books => books.map(formatBook))
        .then(books => this.setState({ books, loading: false }));
    }

    render() {
      const state = options.mapResultsToProps
        ? options.mapResultsToProps(this.state)
        : this.state;

      return (
        <WrappedComponent
          {...this.props}
          {...state}
          updateBooks={this.updateBooks}
        />
      );
    }
  };

export default AllBooksQuery;
