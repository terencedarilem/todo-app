// src/App.js
import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Application ToDo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
