export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text, completed: false }];
    case "TOGGLE_TODO":
      console.log("state", state);
      // return state.map(t => todo(t, action));
      return state.map(el =>
        el.id === action.id
          ? Object.assign({}, el, { completed: !el.completed })
          : el
      );
    default:
      return state;
  }
};

// const todo = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE_TODO":
//       if (state.id !== action.id) {
//         return state;
//       }

//       return {
//         ...state,
//         completed: !state.completed
//       };
//     default:
//       return state;
//   }
// };
