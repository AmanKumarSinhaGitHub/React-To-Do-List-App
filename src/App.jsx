import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleClickTaskAdd() {
    if (task.trim() === "") {
      setInputError(true);

      setTimeout(() => {
        setInputError(false);
      }, 500);

      return;
    }

    if (taskList.some((t) => t.text === task)) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return;
    }

    setTaskList([...taskList, { text: task, isChecked: false }]);
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleChangeCheckBox(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].isChecked = !updatedTaskList[index].isChecked;
    setTaskList(updatedTaskList);
  }

  function handleDeleteTask(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <header id="title" className="container">
        <h1>To Do List</h1>
      </header>

      <main>
        <section className={`container ${inputError ? "shake" : ""}`}>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={handleClickTaskAdd}>Add Task</button>
        </section>

        <section className="todoListContainer">
          {taskList.map((task, index) => (
            <div key={index} className="todoItem">
              <div className="container">
                <div className="checkBox">
                  <Checkbox
                    sx={{
                      color: "white",
                    }}
                    checked={task.isChecked}
                    onChange={() => handleChangeCheckBox(index)}
                  />
                </div>

                <div className=" itemName">
                  <p className={task.isChecked ? "strikethrough" : ""}>
                    {task.text}
                  </p>
                </div>
              </div>
              <div
                className="deleteItem"
                onClick={() => handleDeleteTask(index)}
              >
                <ClearIcon
                  sx={{
                    fontSize: "1.5em",
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </main>

      {showPopup && (
        <div className="popup">
          <p>Task already exists!</p>
        </div>
      )}

      <footer className="container">
        <h3 id="footerText">Thanks for using our To-Do-List App 💖</h3>
      </footer>
    </>
  );
}

export default App;
