import React, { Component } from "react";
import { connect } from "react-redux";

import Notes from "../components/NotesComponent";
import Header from "../components/HeaderComponent";
import AddNoteContainer from "../containers/AddNoteContainer";
import { removeNote } from "../actions";

class NotesContainer extends Component {
  handleRemove = (index) => {
    this.props.removeNote(index);
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Notes notes={this.props.notes} handleRemove={this.handleRemove} />
        <AddNoteContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { notes: state.notes };
};

const mapDispatchToProps = (dispatch) => ({
  removeNote: (index) => dispatch(removeNote(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
