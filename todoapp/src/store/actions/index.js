let todoId = 0;

export const addTodo = todoText => {
  return {
    type: "ADD_TODO",
    id: todoId++,
    text: todoText
  };
};

// toggles action to Done or Not Done
export const toggleTodo = idTodo => {
  return {
    type: "TOGGLE_TODO",
    id: idTodo
  };
};

// changes which actions are shown
export const setVisibility = () => dispatch =>
  dispatch({
    type: "SET_VISIBILITY"
  });
