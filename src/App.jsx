import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInputForm from "./components/TaskInputForm";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(null); // Set initial state to null
  const [inputError, setInputError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [editing, setEditing] = useState({index: null, isEdit: false});


  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

    // Set the taskList state only if it's null
    if (taskList === null) {
      setTaskList(storedTaskList);
    }
  }, [taskList]);

  // Save tasks to localStorage whenever taskList changes
  useEffect(() => {
    if (taskList !== null) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  function handleClickTaskAdd() {
    const formattedTask = task.trim().toLowerCase();

    if (formattedTask === "") {
      setInputError(true);

      setTimeout(() => {
        setInputError(false);
      }, 500);

      return;
    }

    if (taskList.some((t) => t.text.toLowerCase() === formattedTask)) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 1500);

      setTask("");

      return;
    }

    // Update taskList state and localStorage
    if (!editing.isEdit) {
      const updatedTaskList = [
        ...(taskList || []),
        { text: task, isChecked: false },
      ];
      setTaskList(updatedTaskList);
    }
    else{
      const updatedTaskList = [...taskList]
      const editIndex = editing.index;
      console.log(editIndex)
      updatedTaskList[editIndex].text = task;
      setTaskList(updatedTaskList);
      setEditing({index: null, isEdit: false});
    }
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <Header />

      <main>
        <TaskInputForm
          inputError={inputError}
          task={task}
          handleChange={handleChange}
          handleClickTaskAdd={handleClickTaskAdd}
          editing={editing}
        />

        <Todos
          taskList={taskList || []}
          setTaskList={setTaskList}
          setTask={setTask}
          editing={editing}
          setEditing={setEditing}
        />

        {showPopup && (
          <div className="popup">
            <p>Task already exists!</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
