import { combineReducers } from "redux";

const notesReducer = (state = {}, action) => {
  const { notes } = state;
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.note.title,
            detail: action.note.detail,
            editing: false
          }
        ]
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: notes.filter((char, i) => {
          return i !== action.index;
        })
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: notes.map((note, i) => {
          console.log(action.note, i, action.index);
          return i === +action.index
            ? {
                title: action.note.title,
                detail: action.note.detail
              }
            : note;
        })
      };
    default:
      return state;
  }
};

const removeNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "REMOVE_NOTE":
      const { notes } = state;
      return {
        ...state,
        notes: notes.filter((char, i) => {
          return i !== action.index;
        })
      };
    default:
      return state;
  }
};

// const reducers = combineReducers({
//   addNote: addNoteReducer,
//   removeNote: removeNoteReducer
// });

export default notesReducer;
