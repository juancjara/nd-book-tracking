import React, { Component } from "react";

import * as BooksAPI from "../../BooksAPI";

export default WrappedComponent =>
  class extends Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          updateBookShelf={(id, shelf) => BooksAPI.update({ id }, shelf)}
        />
      );
    }
  };
