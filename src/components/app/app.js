import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    console.log("componentDidCatch");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="re-store">
        <Spinner />
      </div>
    );
  }
}
