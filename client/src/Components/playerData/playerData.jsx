import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled("div")`
    border: 1px solid red;
    margin: 1em 2em;
    padding: 1em;
`;

const StyledH3 = Styled("h3")`
    font-size: 2.4em;
`;

const StyledP = Styled("p")`
    font-size: 1.8em;
`;

function PlayerData({ item }) {
    //console.log(item.name);
    const name = item.name;
    const country = item.country;
    const searches = item.searches;

    return (
        <StyledDiv className="playerData">
            <StyledH3> Name: <br /> {name}</StyledH3>
            <StyledP> Country: <br /> {country} </StyledP>
            <StyledP> Searches: <br /> {searches} </StyledP>
        </StyledDiv>
    )
}

export default PlayerData;

