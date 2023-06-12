import { useState } from "react";
import "./styles/App.css";

import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      text: "Study React",
      isCompleted: true,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: "Study Typescript",
      isCompleted: false,
    },
  ]);

  function insert(text) {
    console.log("Enviou");

    if (text) {
      setTodos((prevState) => [
        ...prevState,
        {
          id: Math.floor(Math.random() * 1000),
          text,
          isCompleted: false,
        },
      ]);
    }
  }

  function remove(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id != id));
  }

  function complete(id) {
    const updatedTodo = [...todos];
    updatedTodo.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(updatedTodo);
  }

  return (
    <section>
      <header>
        <h1>React list</h1>
      </header>

      <main>
        <Form insert={insert} />

        <div>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  remove={remove}
                  complete={complete}
                />
              );
            })
          ) : (
            <p>No tasks</p>
          )}
        </div>
      </main>
    </section>
  );
}

export default App;
