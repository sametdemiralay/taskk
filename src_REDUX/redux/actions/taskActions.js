import * as actionTypes from "./actionTypes";

const addTask = (title) => {
 return {
  type: actionTypes.ADD_TASK,
  payload: title,
 };
};

const removeTask = (id) => {
 return {
  type: actionTypes.REMOVE_TASK,
  payload: id,
 };
};

const clearList = () => {
 return {
  type: actionTypes.CLEAR_LIST,
 };
};

export default {
 addTask,
 removeTask,
 clearList,
};
