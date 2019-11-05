export const addNote = note => {
  return {
    type: "ADD_NOTE",
    note: { title: note.title, detail: note.detail }
  };
};

export const removeNote = index => {
  return {
    type: "REMOVE_NOTE",
    index
  };
};

export const editNote = (index, note) => {
  return {
    type: "EDIT_NOTE",
    index,
    note
  };
};
