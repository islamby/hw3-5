import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Name = () => {
  const [newName, setNewName] = useState('');
  const nameList = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddName = () => {
    if (newName.trim() !== '') {
      dispatch({ type: 'ADD_NAME', payload: newName });
      setNewName('');
    }
  };

  const handleRemoveName = (index) => {
    dispatch({ type: 'REMOVE_NAME', payload: index });
  };

  return (
    <div className="name">
      <h1>Name</h1>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter a name"
        className="name-input"
      />
      <button onClick={handleAddName} className="add-button">
        Add Name
      </button>
      <ul className="name-list">
        {nameList.map((name, index) => (
          <li key={index} className="name-item">
            {name} 
            <button onClick={() => handleRemoveName(index)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Name;
