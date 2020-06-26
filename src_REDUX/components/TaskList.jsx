import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task";

export const TaskList = () => {
 const tasks = useSelector((state) => state.tasks);

 return (
  <div>
   {tasks.length ? (
    <ul className="list">
     {tasks.map((task) => (
      <Task task={task} key={task.id} />
     ))}
    </ul>
   ) : (
    <div className="no-tasks">No Tasks</div>
   )}
  </div>
 );
};
