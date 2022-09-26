import {  useEffect, useRef, useState } from "react";

const TaskForm = ({ addNewTask }) => {
  const inputName = useRef(null);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    inputName.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("registrando")
  };

  const handleInputChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setTaskName(e.target.value);
    // console.log(taskName);
  };

  const createNewTask = () => {
    addNewTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={taskName}
          ref={inputName}
          onChange={handleInputChange}
          type="text"
          name="name"
          className="form-control"
        />
      </div>
      <button onClick={createNewTask} type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
