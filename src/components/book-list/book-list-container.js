import React, { Component } from "react";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/withBookstoreService/withBookstoreService";
import { fetchBooks } from "../../actions/actions";
import compose from "../../utils/compose";
import BookList from "./book-list";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

class BookListContainer extends Component {
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

    return <BookList books={books}/>;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
