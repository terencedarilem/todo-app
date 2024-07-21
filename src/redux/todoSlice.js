// src/redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    editTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.description = description;
      }
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
