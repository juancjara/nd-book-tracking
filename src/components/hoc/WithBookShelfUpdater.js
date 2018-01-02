import React, { Component } from "react";

export default WrappedComponent =>
  class extends Component {
    onShelfChange = (id, shelf) => {
      if (!shelf) return;
      const { updateBooks, updateBookShelf, books } = this.props;
      updateBooks(
        books.map(book => {
          if (id === book.id) {
            return { ...book, shelf };
          }
          return book;
        })
      );
      updateBookShelf(id, shelf)
        .then()
        .catch(() => updateBooks(books));
    };

    render() {
      return (
        <WrappedComponent {...this.props} onShelfChange={this.onShelfChange} />
      );
    }
  };
