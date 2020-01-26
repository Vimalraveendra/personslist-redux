import React, { Component } from "react";
import PersonsList from "../components/PersonsList";
import "./App.css";
import { connect } from "react-redux";
import { searchPersons } from "../Actions/Actions";

const mapStateToProps = state => {
  return {
    persons: state.persons,
    isPending: state.isPending,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchPersons: () => dispatch(searchPersons())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onSearchPersons();
  }
  render() {
    return this.props.isPending ? (
      <h1>Loading....</h1>
    ) : (
      <div>
        <h1 className="tc">Personal List</h1>

        <PersonsList personsArray={this.props.persons} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
