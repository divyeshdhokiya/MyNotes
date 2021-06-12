import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../components/HeaderComponent";
import EditNote from "../components/EditNoteComponent";
import { editNote } from "../actions";

class EditNoteContainer extends Component {
  handleUpdate = (index, note) => {
    this.props.editNote(index, note);
    this.props.history.push("/");
  };
  getData = (index) => {
    const note = this.props.notes.filter((note, i) => {
      if (i === +index) {
        return note;
      }
    });
    return {
      index,
      title: note[0].title,
      detail: note[0].detail,
    };
  };
  render() {
    const {
      match: { params },
    } = this.props;
    return (
      <div className="container">
        <Header />
        <EditNote
          handleUpdate={(note) => this.handleUpdate(params.index, note)}
          {...this.getData(params.index)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  editNote: (index, note) => dispatch(editNote(index, note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteContainer);
