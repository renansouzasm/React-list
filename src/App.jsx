import { useState } from "react";
import "./styles/App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  

  return (
    <section>
      <header>
        <h1>React list</h1>
      </header>

      <main>
        <Form />

        <div>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </main>
    </section>
  );
}

export default App;
