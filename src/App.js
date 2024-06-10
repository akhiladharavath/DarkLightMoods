import './App.css';
import { useState } from 'react';

function App() {


  const[isDarkMode, setIsDarkMode]= useState(false);
  const toggleDarkMode = () =>{
    setIsDarkMode(!isDarkMode);
  }


  return (
   <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
    <input 
     type="checkbox"
     id="dark-mode"
     checked={isDarkMode}
     onChange={toggleDarkMode}
    
    />

    <label htmlFor="dark-mode"></label>
    <div className='background'></div>
   </div>
  );
}

export default App;
