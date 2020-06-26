import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../redux/actions/index";
import { FaPen, FaTrash } from "react-icons/fa";
import $ from 'jquery'

export const TaskList = () => {
 const tasks = useSelector((state) => state.tasks);
 const dispatch = useDispatch();

 const getTasks = () => dispatch(allActions.taskActions.getTasks());
 const removeTask = (a) => dispatch(allActions.taskActions.removeTask(a));
 const editTask = (id, title) => dispatch(allActions.taskActions.editTask(id, title));

 const deleteTask = (a) => {
   removeTask(a);
   document.getElementById(a).remove()
  };

  const UpdateTask = (a,b) => {
   editTask(a,b)
   $("#" + a +" > span").text(b)
  };

 useEffect(()=>{
    getTasks()
 },[])

 return (
  <div>
   {tasks.length ? (
    <ul className="list">
     {tasks.map((task) => (
      <li id={task.id} key={task.id} className="list-item">
      <span >{task.title}</span>
      <div>
       <button onClick={() => deleteTask(task.id)} className="btn-delete task-btn">
        <FaTrash size={16} color={"#BBB"} />
       </button>
       <button
        onClick={() => UpdateTask(task.id, "asd")}
        className="btn-edit task-btn"
       >
        <FaPen size={16} color={"#BBB"} />
       </button>
      </div>
     </li>
     ))}
    </ul>
   ) : (
    <div className="no-tasks">No Tasks</div>
   )}
  </div>
 );
};
