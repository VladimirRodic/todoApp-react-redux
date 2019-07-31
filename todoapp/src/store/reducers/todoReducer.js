export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("actionADD_TODO", action);
      console.log("state.todos undefined", state.todos);
      /*      if (state.todos === undefined || state.todos.length === 0) {
        state.todos = [];
        console.log("state.todos undefined", state.todos);
      }
*/
      return [...state.todos, { text: action.text, completed: false }];
    default:
      return state;
  }
};
