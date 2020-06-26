import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

const taskReducer = (state = initialState.tasks, action) => {
 const { type, payload } = action;
 let ref;

 switch (type) {
  case actionTypes.GET_TASKS:
    state = payload
   return state;

  case actionTypes.ADD_TASK:
   ref = [...state, payload];
   return ref;

  case actionTypes.REMOVE_TASK:
   return state;

  case actionTypes.EDIT_TASK:
   return state;

  default:
   return state;
 }
};

export default taskReducer;
