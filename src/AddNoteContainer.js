import React, { Component } from "react";
import { connect } from "react-redux";
import AddNote from "./AddNoteComponent";
import { addNote } from "./actions";

class AddNoteContainer extends Component {
  handleSubmit = note => {
    this.props.addNote(note);
  };
  render() {
    return (
      <div className="container">
        <AddNote onSubmit={note => this.handleSubmit(note)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNoteContainer);
