import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';

function App() {
  const[isDarkMode,setDarkMode]=useState(false)
  console.log(isDarkMode);

  return (
    <>
    <div className={isDarkMode?`appbg`:`lightbg`}>
      <Navbar  isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      <Body isDarkMode={isDarkMode} />
    </div>
     
    </>
  );
}

export default App;
