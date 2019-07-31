let todoId = 0;

export const addTodo = todoText => {
  return {
    type: "ADD_TODO",
    id: todoId++,
    text: todoText
  };
};

// toggles action to Done or Not Done
export const toggleTodo = () => dispatch =>
  dispatch({
    type: "TOGLE_TODO"
  });

// changes which actions are shown
export const setVisibility = () => dispatch =>
  dispatch({
    type: "SET_VISIBILITY"
  });
