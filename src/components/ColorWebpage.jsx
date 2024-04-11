// As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color.

import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function ColorWebpage() {
  const {colorName} = useParams();
  const colors = JSON.parse(localStorage.getItem('colors')) || [];
  const color = colors.find(c => c.name === colorName);
  const navigate = useNavigate();

  //As a user, if I try to navigate to a color page that does not exist (eg, /colors/nope), I am redirected to the colors index page.
  if (!color) {
    return <div>Sorry, we could not find that color. Please try again. <br></br>
        <a href="/colors" className="btn btn-primary mt-3">Return to List</a>
      </div>;
  }

  const colorStyle = {
    width: "80vw",
    height: "80vh",
    backgroundColor: color.color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: 'white',
  };

  return (
      <div class="container" style={colorStyle}>
        {color.name}
          <br></br>
          <br></br>
          <a href="/colors" className="btn btn-primary" style={{ position: 'absolute', top: 20, left: 20 }}>Return to List</a>
      </div>
  );
}

export default ColorWebpage;