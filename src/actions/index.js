export const getTodos = () => async (dispatch) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((jsonData) => jsonData.json())
    .catch((e) => e);

  dispatch({
    type: "GET_TODOS",
    payload: data,
  });
};

export const addTodos = (data) => (dispatch) => {
  dispatch({
    type: "ADD_TODOS",
    payload: data,
  });
};
