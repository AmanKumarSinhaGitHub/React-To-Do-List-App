import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    if (task.trim() === "") {
      
      setInputError(true);

      setTimeout(() => {
        setInputError(false);
      }, 500);

      return;
    }

  
    if (todoList.includes(task)) {
  
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return;
    }

    console.log("Task Added", task);
    setTodoList([...todoList, task]);
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <header id="title" className="container">
        <h1>To Do List</h1>
      </header>

      <main>
        <section className={`container ${inputError ? 'shake' : ''}`}>
          <input
            type="text"
            name="task"
            placeholder="Enter Task"
            value={task}
            onChange={handleChange}
          />

          <button onClick={handleClick}>Add Task</button>
        </section>

        <section className="container">
          <div>
            {todoList.map((item, index) => (
              <div key={index} className="todoItem">
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showPopup && (
        <div className="popup">
          <p>Task already exists!</p>
          
        </div>
      )}

      <footer className="container">
        <h3>Thanks for using our To-Do-List App 💖</h3>
      </footer>
    </>
  );
}

export default App;
