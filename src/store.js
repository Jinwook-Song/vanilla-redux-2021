import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Action with toolkit (caution: payload)
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* normal reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};*/

// 주의: mutate 할 경우 절대로! return을 하면 안된다.
// mutate state and doesn't return & return new state
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
