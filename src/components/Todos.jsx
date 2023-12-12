import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";

function Todos({ taskList, setTaskList }) {
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

              <div className="itemName">
                <p className={task.isChecked ? "strikethrough" : ""}>
                  {task.text}
                </p>
              </div>
            </div>

            <div className="deleteItem" onClick={() => handleDeleteTask(index)}>
              <ClearIcon
                sx={{
                  fontSize: "1.7em",
                  marginRight: "1em",
                  transition: "font-size 0.3s",
                  ":hover": {
                    fontSize: "1.8em",
                  },
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Todos;
