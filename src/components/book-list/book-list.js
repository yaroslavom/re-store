import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookstoreService from "../hoc/withBookstoreService/withBookstoreService";
import { booksLoaded, booksRequested, booksError } from "../../actions/actions";
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
    },
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
