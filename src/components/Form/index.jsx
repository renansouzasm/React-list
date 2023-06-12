import { useState } from "react";
import "./style.css";

function Form({ insert }) {
  const [text, setText] = useState("");

  function prevent(event) {
    event.preventDefault();

    insert(text);
  }

  return (
    <>
      <form method="POST" onSubmit={(event) => prevent(event)}>
        <input
          type="text"
          placeholder="Add new tasks"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={(event) => prevent(event)}>
          +
        </button>
      </form>
    </>
  );
}

export default Form;
