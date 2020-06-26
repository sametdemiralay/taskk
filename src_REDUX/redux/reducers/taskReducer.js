import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const taskReducer = (state = initialState.tasks, action) => {
 const { type, payload } = action;
 let ref;

 switch (type) {
  case actionTypes.ADD_TASK:
   ref = [...state, { title: payload, id: uuidv4() }];
   return ref;

  case actionTypes.REMOVE_TASK:
   ref = state.filter((val) => val.id !== payload);
   return ref;

  case actionTypes.CLEAR_LIST:
   state = [];
   return state;

  default:
   return state;
 }
};

export default taskReducer;
