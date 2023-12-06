import { useState } from "react";
import "./App.css";
import TaskInputForm from "./components/TaskInputForm";
import Todos from "./components/Todos";

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
        <TaskInputForm
          inputError={inputError}
          task={task}
          handleChange={handleChange}
          handleClickTaskAdd={handleClickTaskAdd}
        />

        <Todos
          taskList={taskList}
          handleChangeCheckBox={handleChangeCheckBox}
          handleDeleteTask={handleDeleteTask}
        />
      </main>

      {showPopup && (
        <div className="popup">
          <p>Task already exists!</p>
        </div>
      )}

      <footer className="container">
        <p id="footerText">Copyright © 2023 • Aman</p>
      </footer>
    </>
  );
}

export default App;
