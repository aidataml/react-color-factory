/* As a user, I can go to /colors to see a list of all available colors.
 As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.*/

import React, {useEffect, useState} from 'react';

function ColorList() {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const loadedColors = JSON.parse(localStorage.getItem('colors')) || [];
        setColors(loadedColors);
    }, []);

    const handleColorClick = (colorName) => {
        const url = `${window.location.origin}/color-page/${colorName}`;
        window.open(url); 
    };

    return (
        <div>
        <h1>Color Generator:</h1>
        <h3>Select the button to add a color to the list.</h3>
        {colors.map((color, index) => (
            <div key={index} 
                style={{ display: 'block', color: color.color, cursor: 'pointer' }}
                onClick={() => handleColorClick(color.name)}>
            {color.name}
            </div>
        ))}
        <a href="/colors/new" className="btn btn-primary mt-3">Add Color</a>
        </div>
    );
}

export default ColorList;
