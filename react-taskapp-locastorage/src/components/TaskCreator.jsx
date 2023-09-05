import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inputText"
        type="text"
        placeholder="Enter a new task"
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>click</button>
    </form>
  );
};

export default TaskCreator;
