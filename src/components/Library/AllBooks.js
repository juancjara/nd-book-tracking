import React from "react";

import AllBooksQuery from "../Queries/AllBooksQuery";
import BookList from "../BookList";
import Loading from "../ui/Loading";

const AllBooks = ({ books, loading }) =>
  loading ? <Loading /> : <BookList books={books} />;

export default AllBooksQuery()(AllBooks);
