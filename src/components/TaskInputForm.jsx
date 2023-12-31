import React from "react";

function TaskInputForm({ inputError, task, handleChange, handleClickTaskAdd, editing}) {
  return (
    <>
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

        <button onClick={handleClickTaskAdd}> {editing.isEdit? "Edit": "Add"} Task</button>
      </form>
    </>
  );
}

export default TaskInputForm;
