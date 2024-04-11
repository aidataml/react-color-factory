import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './components/ColorList';
import AddColor from './components/AddColor';
import ColorWebpage from './components/ColorWebpage';
import './App.css';

function App() {
  return (
    <div className="center-container">
      <Routes>
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/new" element={<AddColor />} />
        <Route path="/color-page/:colorName" element={<ColorWebpage />} />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </div>
  );
}

export default App;


