import React, { Component } from "react";
import { connect } from "react-redux";

import Notes from "./NotesComponent.js";
import Header from "./HeaderComponent.js";
import AddNoteContainer from "./AddNoteContainer";
import { removeNote } from "./actions";

class NotesContainer extends Component {
  handleRemove = index => {
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
const mapStateToProps = state => {
  return { notes: state.notes };
};

const mapDispatchToProps = dispatch => ({
  removeNote: index => dispatch(removeNote(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
