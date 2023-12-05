
import "./App.css";

function Form({ inputError, task, handleChange, handleClickTaskAdd }) {
   return (
      <form
      className={`container ${inputError ? "shake" : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        name="task"
        placeholder="Enter Task"
        value={task}
        onChange={handleChange}
      />
      <button onClick={handleClickTaskAdd}>Add Task</button>
    </form>
   )
}

export default Form