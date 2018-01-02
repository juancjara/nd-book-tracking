import React, { Component } from "react";
import debounce from "lodash/debounce";

import { Link } from "react-router-dom";
import AllBooks from "./AllBooks";
import SearchResults from "./SearchResults";
import Input from "./Input";

class Library extends Component {
  state = { search: "" };

  onChange = debounce(search => this.setState({ search }), 100);

  render() {
    const { search } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Input
              placeholder="Search by title or author"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          {search ? <SearchResults search={search} /> : <AllBooks />}
        </div>
      </div>
    );
  }
}

export default Library;
