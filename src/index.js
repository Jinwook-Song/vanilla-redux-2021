import { createElement } from "react";
import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// Action
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// Without Mutating State
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((toDos) => toDos.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const dispatchDeleteToDo = (event) => {
  const {
    target: {
      parentNode: { id },
    },
  } = event;
  store.dispatch(deleteToDo(parseInt(id)));
};

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "❌";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerHTML = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
