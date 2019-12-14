import React from 'react';
import { useDarkMode } from "../../Hooks/useDarkMode";
import "../../App.css";
import Styled from "styled-components";

const StyledNavBar = Styled("nav")`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 18vh;
  justify-content: space-between;
  padding: 0 3%;
  width: 94%;
  -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);

  @media (max-width: 720px) and (min-width: 320px) {
    width: 100%;
  }

`;

const StyledDiv = Styled("div")`
  background: ;
  border-radius: 50px;
  border: 1.25px solid black;
  height: 16.5px;
  position: relative;
  width: 40px;
  margin-right: 4vw;
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

const StyledH1 = Styled("h1")`
    font-size: 4em;
    font-weight: 800;
    display: flex;
    justify-content: center;
    color: #019875;
    margin: 0 0.5em;

    @media (max-width: 720px) {
      font-size: 2.8em;
    }

    @media (max-width: 320px) {
      font-size: 1.8em;
    }
`;


const DarkModeNavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <StyledNavBar className='navbar'>
      <StyledH1>Women's World Cup</StyledH1>
      <StyledDiv className='dark-mode__toggle'>
        <StyledToggle
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </StyledDiv>
    </StyledNavBar>
  );
};

export default DarkModeNavBar;