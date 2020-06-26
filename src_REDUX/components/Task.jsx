import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../redux/actions/index";
import { FaPen, FaTrash } from "react-icons/fa";

export const Task = ({ task }) => {
 const dispatch = useDispatch();
 const removeTask = (a) => dispatch(allActions.taskActions.removeTask(a));

 return (
  <li className="list-item">
   <span>{task.title}</span>
   <div>
    <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
     <FaTrash size={16} color={"#BBB"} />
    </button>
    <button
     onClick={() => alert("basma kank yapmadım amk")}
     className="btn-edit task-btn"
    >
     <FaPen size={16} color={"#BBB"} />
    </button>
   </div>
  </li>
 );
};
