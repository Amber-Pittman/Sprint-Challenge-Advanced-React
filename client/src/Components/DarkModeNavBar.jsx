import React from 'react';
import { useDarkMode } from "../Hooks/useDarkMode";
import Styled from "styled-components";

const StyledNavBar = Styled("nav")`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 7.5em;
  justify-content: space-between;
  padding: 0 3%;
  width: 94%;
  -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
`;

const StyledDiv = Styled("div")`
  background: ;
  border-radius: 50px;
  border: 1.25px solid black;
  height: 20px;
  position: relative;
  width: 40px;
  margin-right: 2em;
  `;

const StyledToggle = Styled("div")`
  background: #019875;
  border-radius: 50px;
  height: 18px;
  left: 0;
  position: absolute;
  transition: 0.2s;
  width: 20px;

  .toggled {
    left: 18px;
  }
  `;
  // Having trouble figuring out how to target `toggled` to get it to work

const StyledH1 = Styled("h1")`
    font-size: 5.5vw;
    font-weight: 800;
    display: flex;
    justify-content: center;
    color: #019875;
    margin: 1em 0.5em;
`;


const DarkModeNavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <StyledNavBar className='navbar'>
      <StyledH1>Womens World Cup</StyledH1>
      <StyledDiv className='dark-mode__toggle'>
        <StyledToggle
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </StyledDiv>
    </StyledNavBar>
  )
}

export default DarkModeNavBar;