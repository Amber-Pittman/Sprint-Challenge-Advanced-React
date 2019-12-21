import React from 'react';
import PlayerAPI from './Components/PlayerAPI/PlayerAPI';
import DarkModeNavBar from "./Components/DarkMode/DarkModeNavBar";
// import Styled from "styled-components";

// const StyledDiv = Styled("div")`
//   background-color: #f5f5f5;
// `;

function App() {
  return(
    <div className="App">
      
      <DarkModeNavBar />

      {/* <StyledDiv> */}
        <PlayerAPI />
      {/* </StyledDiv> */}
    </div>
    
  );
  
}

export default App;