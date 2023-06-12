import "./style.css";

function Form() {
  return (
    <>
      <form method="POST" aria-disabled>
        <input type="text" placeholder="Add new tasks" />
        <button>+</button>
      </form>
    </>
  );
}

export default Form;
