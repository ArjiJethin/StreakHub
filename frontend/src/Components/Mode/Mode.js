import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as regularMoon } from '@fortawesome/free-regular-svg-icons';
import './Mode.css';
const Mode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="mode-toggle">
      <button className='switch-button' onClick={() => setDarkMode(!darkMode)}>
        <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon}/>
      </button>
    </div>
  );
};

export default Mode;