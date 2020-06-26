import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import { FaPen, FaTrash } from 'react-icons/fa';

export const Task = ({task}) => {
   const {removeTask, findItem} = useContext(TaskListContext)

 return (
  <li className="list-item">
   <span>{task.title}</span>
   <div>
    <button onClick={()=> removeTask(task.id)} className="btn-delete task-btn">
    <FaTrash size={16} color={"#BBB"} />
    </button>
    <button onClick={()=> findItem(task.id)} className="btn-edit task-btn">
    <FaPen size={16} color={"#BBB"} />
    </button>
   </div>
  </li>
 );
};
