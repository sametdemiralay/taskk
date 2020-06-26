import React, { useState } from "react";
import { useDispatch } from "react-redux";
import allActions from "../redux/actions/index";

export const TaskForm = () => {
 const dispatch = useDispatch();
 const addTask = (a) => dispatch(allActions.taskActions.addTask(a));

 const [title, setTitle] = useState("");

 const handleChange = (e) => {
  setTitle(e.target.value);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  addTask(title);
  setTitle("");
 };

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
     Add Task
    </button>
    <button onClick={()=> alert("YAPMADIM")} className="btn clear-btn">
     Clear
    </button>
   </div>
  </form>
 );
};
