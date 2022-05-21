import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log(todos, "home");

  useEffect(() => {
    todos.length == 0 && dispatch(getTodos());
  }, []);

  const filterTodos = (value) => {
    setSearchText(value);
    const filterArray = todos.filter((element) => {
      return element.title.includes(value);
    });

    setFilteredTodos(filterArray);
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <Link
          style={{
            backgroundColor: "green",
            padding: "10px",
            margin: "5px",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
          }}
          to="add-todos"
        >
          add todos
        </Link>
        <input
          id="namanyay-search-box"
          name="todo"
          size="40"
          type="text"
          onChange={(event) => filterTodos(event.target.value)}
          placeholder="Search ..."
        />
      </div>
      <table>
        <thead>
          <tr className="taksitSayisi">
            <th className="taksitEkrani">Title</th>
            <th className="taksitEkrani">Completed</th>
          </tr>
        </thead>
        <tbody>
          {(searchText === "" ? todos : filteredTodos).map((element) => (
            <tr key={element.id}>
              <td className="bankaGri">{element.title}</td>
              <td className="bankaGri">
                {element.completed ? "Completed" : "Not Completed"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
