import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodos } from "../actions";
import "./home.css";

function AddTodos() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState();
  const todos = useSelector((state) => state.todos);

  const recentlyAddedTodos = todos.slice(200);
  console.log(todos);

  const addTodo = (data) => {
    dispatch(
      addTodos({
        title: todoName,
        completed: false,
        id: Math.random(0.5),
      })
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Link
          style={{
            backgroundColor: "green",
            padding: "10px",
            margin: "20px",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
          }}
          to="/"
        >
          Home
        </Link>
        <input
          id="namanyay-search-box"
          name="todo"
          size="40"
          type="text"
          onChange={(event) => setTodoName(event.target.value)}
          placeholder="Write a todo ..."
        />

        <button
          style={{
            padding: "10px",
            backgroundColor: "blue",
          }}
          onClick={addTodo}
        >
          Add to do
        </button>
      </div>
      <table style={{ paddingTop: "10px" }}>
        <thead>
          <tr className="taksitSayisi">
            <th className="taksitEkrani">Title</th>
            <th className="taksitEkrani">Completed</th>
          </tr>
        </thead>
        <tbody>
          {recentlyAddedTodos.length > 0 ? (
            recentlyAddedTodos.map((element) => (
              <tr key={element.id}>
                <td className="bankaGri">{element.title}</td>
                <td className="bankaGri">
                  {element.completed ? "Completed" : "Not Completed"}
                </td>
              </tr>
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>This list is empty!</h1>
          )}
        </tbody>
      </table>
    </>
  );
}

export default AddTodos;
