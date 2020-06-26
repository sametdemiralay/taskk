//ReactNativee / project
import React from "react";
import "../App.css";
import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";
export const App = () => {
 return (
  <div className="container">
   <div className="app-wrapper">
    <Header />
    <div className="main">
     <TaskForm />
     <TaskList />
    </div>
   </div>
  </div>
 );
};
