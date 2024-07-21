// src/components/TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, removeTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Modifier la tâche', todo.description);
    if (newDescription) {
      dispatch(editTodo({
        id: todo.id,
        description: newDescription
      }));
    }
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggle}
      />
      <span>{todo.description}</span>
      <button onClick={handleEdit}>Modifier</button>
      <button onClick={handleRemove}>Supprimer</button>
    </div>
  );
};

export default TodoItem;
