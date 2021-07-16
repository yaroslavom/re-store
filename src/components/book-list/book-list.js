import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookstoreService from "../hoc/withBookstoreService/withBookstoreService";
import { booksLoaded } from "../../actions/actions";
import compose from "../../utils/compose";
import Spinner from "../spinner/spinner"
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="book-list">
        {books.map((book, id) => (
          <li key={id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
