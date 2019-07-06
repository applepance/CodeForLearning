export default (state = [], action) => {
  switch (action.type) {
    case "increment":
      state.push(action.todo);
      return state;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};