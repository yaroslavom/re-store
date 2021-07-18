import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookstoreService from "../hoc/withBookstoreService/withBookstoreService";
import { fetchBooks } from "../../actions/actions";
import compose from "../../utils/compose";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
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

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
