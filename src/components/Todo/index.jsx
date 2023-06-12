import "./style.css";
import { Trash, CheckSquare, CheckSquareOffset } from "@phosphor-icons/react";

function Todos({ todo, remove, complete }) {
  const { id, text, isCompleted } = todo;

  return (
    <div key={id} className="cardTodo">
      <p style={{ textDecoration: isCompleted && "line-through" }} >{text}</p>

      <div className="btns">
        <button className="btnTodo" onClick={() => remove(id)}>
          <Trash size={26} color="#e1e1e6" />
        </button>
        <button className="btnTodo" onClick={() => complete(id)}>
          {isCompleted ? (
            <CheckSquare size={26} color="#e1e1e6" />
          ) : (
            <CheckSquareOffset size={26} color="#e1e1e6" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Todos;
