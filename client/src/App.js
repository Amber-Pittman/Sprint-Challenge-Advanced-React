import React from 'react';
import PlayerAPI from './Components/PlayerAPI/PlayerAPI';
import DarkModeNavBar from "./Components/DarkMode/DarkModeNavBar";


function App() {
  return(
    <div className="App">
      
      <DarkModeNavBar />
      <PlayerAPI />
    </div>
  );
  
}

export default App;