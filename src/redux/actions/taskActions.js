import * as actionTypes from "./actionTypes";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// GET
const getTasksSuccess = (tasks) => {
 return {
  type: actionTypes.GET_TASKS,
  payload: tasks,
 };
};

const getTasks = () => {
 return (dispatch) => {
  axios.get("http://localhost:3000/gorevler").then((res) => {
   dispatch(getTasksSuccess(res.data));
  });
 };
};

// CREATE
const addTaskSuccess = title => {
   return {
     type: actionTypes.ADD_TASK,
     payload: title,
   };
 };
 
 const addTask = (title) => {
   return dispatch => {
     axios
       .post('http://localhost:3000/gorevler', {
         id: uuidv4(),
         title: title
       })
       .then(res => {
         dispatch(addTaskSuccess(res.data));
       });
   };
 };

 // DELETE
const removeTaskSuccess = () => {
   return {
     type: actionTypes.REMOVE_TASK,
   };
 };
 
 const removeTask = id => {
   return dispatch => {
     axios.delete('http://localhost:3000/gorevler/' + id).then(() => {
       dispatch(removeTaskSuccess());
     });
   };
 };

// UPDATE
const editTaskSuccess = () => {
   return {
     type: actionTypes.EDIT_TASK,
   };
 };
 
 const editTask = (id, title) => {
   return dispatch => {
     axios
       .patch('http://localhost:3000/gorevler/' + id, {title})
       .then(res => {
         dispatch(editTaskSuccess());
       });
   };
 };


export default {
 getTasks,
 addTask,
 removeTask,
 editTask,
};
