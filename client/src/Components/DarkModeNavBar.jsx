import React from 'react';
import { useDarkMode } from "../Hooks/useDarkMode";

const DarkModeNavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <h1>Womens World Cup</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  )
}

export default DarkModeNavBar;