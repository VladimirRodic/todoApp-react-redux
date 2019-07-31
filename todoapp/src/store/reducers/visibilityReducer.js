export default (state = [], action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      return action.visibilityOption;
    default:
      return state;
  }
};
