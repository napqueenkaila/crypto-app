import { createAction, createReducer } from "@reduxjs/toolkit";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const todosReducer = createReducer(
  [
    { value: "todo 1", id: 1, completed: false },
    { value: "todo 2", id: 2, completed: false },
    { value: "todo 3", id: 3, completed: false },
  ],
  (builder) => {
    builder
      .addCase(ADD_TODO, (state, action: any) => {
        state.push(action.payload);
        return state;
      })
      .addCase(TOGGLE_TODO, (state, action: any) => {
        const nextItem = { ...action.payload };
        nextItem.completed = !nextItem.completed;
        return state.map((el) => {
          if (el.id === action.payload.id) {
            return nextItem;
          }
          return { ...el };
        });
      });
  }
);

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);

export default todosReducer;
