import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

export const TaskForm = () => {
 const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

 const [title, setTitle] = useState("");

 const handleChange = (e) => {
  setTitle(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (editItem === null) {
   addTask(title);
  } else {
   editTask(title, editItem.id);
  }
  setTitle("");
 };

 useEffect(() => {
  if (editItem !== null) {
   setTitle(editItem.title);
   console.log(editItem);
  } else {
   setTitle("");
  }
 }, [editItem]);

 return (
  <form onSubmit={handleSubmit} className="form">
   <input
    onChange={handleChange}
    value={title}
    type="text"
    className="task-input"
    placeholder="Add Task..."
    required
   />
   <div className="buttons">
    <button type="submit" className="btn add-task-btn">
     {editItem === null ? "Add Task" : "Edit Task"}
    </button>
    <button onClick={clearList} className="btn clear-btn">
     Clear
    </button>
   </div>
  </form>
 );
};
