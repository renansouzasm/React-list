import "./style.css";
import { Trash, CheckSquare, CheckSquareOffset } from "@phosphor-icons/react";

function Todos() {
  return (
    <div className="cardTodo">
      <p>Tarefa 1</p>

      <div className="btns">
        <button className="btnTodo">
          <Trash size={26} color="#e1e1e6" />
        </button>
        <button className="btnTodo">
          <CheckSquare size={26} color="#e1e1e6" />
        </button>
      </div>
    </div>
  );
}

export default Todos;
