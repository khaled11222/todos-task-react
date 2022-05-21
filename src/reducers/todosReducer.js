function todosReducer(state = [], action) {
  console.log(action, "Action");
  switch (action.type) {
    case "GET_TODOS":
      return [...action.payload];
    case "ADD_TODOS":
      console.log(state);
      return [...state, action.payload];
    default:
      return state;
  }
}

export default todosReducer;
