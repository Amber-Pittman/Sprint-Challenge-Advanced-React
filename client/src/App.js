import React from 'react';
import PlayerAPI from './Components/apiData';
import DarkModeNavBar from "./Components/DarkModeNavBar";


function App() {
  return(
    <div className="App">
      
      <DarkModeNavBar />
      <PlayerAPI />
    </div>
  );
  
}

export default App;