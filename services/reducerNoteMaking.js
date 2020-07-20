const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};
const reducer = (state = initialState, action) => {
  console.log("pre", state, action);
  const newState = { ...state };
  let notes = newState.notes;
  if (action.type === "ADD_NOTES") {
    let index = notes.findIndex((s) => s.id === action.obj.id);
    if (index === -1) {
      newState.notes = [...newState.notes, action.obj];
    }
    localStorage.setItem("notes", JSON.stringify(newState.notes));
    return {
      ...newState,
      notes: newState.notes,
    };
  } else if (action.type === "UPDATE_NOTES") {
    let index = notes.findIndex((s) => s.id === action.obj.id);
    if (index === -1) {
    } else {
      newState.notes.splice(index, 1);
      newState.notes = [...newState.notes, action.obj];
    }
    localStorage.setItem("notes", JSON.stringify(newState.notes));
    return {
      ...newState,
      notes: newState.notes,
    };
  } else if (action.type === "DELETE_NOTE") {
    newState.notes = notes.filter((s) => s.id !== action.obj.id);
    localStorage.setItem("notes", JSON.stringify(newState.notes));
    return {
      ...newState,
      notes: newState.notes,
    };
  }

  return state;
};
export default reducer;
