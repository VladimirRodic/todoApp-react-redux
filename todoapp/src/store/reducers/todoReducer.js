export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text, completed: false }];
    case "TOGGLE_TODO":
      // more readable option where we use special function for each individual todo
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

// more readable option where we use a special function for each individual todo

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
