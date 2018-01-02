import React, { Component } from "react";

import * as BooksAPI from "../../BooksAPI";
import { formatBook } from "./formatters";

const SearchQuery = WrappedComponent =>
  class extends Component {
    state = {
      books: [],
      loading: true
    };

    updateBooks = books => {
      this.setState({ books });
    };

    searchResults = search => {
      this.setState({ loading: true });

      BooksAPI.search(search)
        .then(books => {
          if (books.error) return [];
          return books.map(formatBook);
        })
        .then(books => {
          if (this._isMounted) {
            this.setState({ books, loading: false });
          }
        });
    };

    componentDidMount() {
      this._isMounted = true;
      this.searchResults(this.props.search);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.search) {
        this.searchResults(nextProps.search);
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          updateBooks={this.updateBooks}
        />
      );
    }
  };

export default SearchQuery;
