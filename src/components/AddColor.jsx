/*3. As a user, I can click on a button to show a form that will let me add a new color.
  Note that you can give an *input* a type of *color* if you’re trying to select a color.*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddColor() {
  const [color, setColor] = useState('#ffffff'); 
  const [name, setName] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newColor = { name, color }; 
    const existingColors = JSON.parse(localStorage.getItem('colors')) || [];
    localStorage.setItem('colors', JSON.stringify([...existingColors, newColor])); 
    navigate('/colors'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name Your Color:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="color" className="form-label">Choose Your Color:</label>
        <input
          type="color"
          className="form-control form-control-color mini-center-container"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          title="Choose a Color"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Color</button>
    </form>
  );
}

export default AddColor;
