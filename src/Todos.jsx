import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";

function Todos({ taskList, handleChangeCheckBox, handleDeleteTask }) {
   return (
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
   )
}

export default Todos
