import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AddTodos from "./components/add-todos";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="add-todos" element={<AddTodos />} />
      </Routes>
    </Provider>
  );
}

export default App;
