import React, { Component } from "react";

import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NotesComponent extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="container">
        <table>
          <NoteHeader />
          <NoteBody notesData={notes} handleRemove={this.props.handleRemove} />
        </table>
      </div>
    );
  }
}

export default NotesComponent;
