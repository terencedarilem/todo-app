// src/components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (description) {
      dispatch(addTodo({
        id: Date.now(),
        description,
        isDone: false
      }));
      setDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
      />
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AddTodo;
