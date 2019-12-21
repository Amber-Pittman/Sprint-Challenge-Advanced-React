import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled("div")`
    border: 1em solid #019875;
    border-radius: 0 33px 0;
    margin: 1em;
    padding: 1.5em;
    padding-bottom: 2em;
    width: 500px;
    height: 300px;
    display: inline-block;
    line-height: 1.15;

    @media (max-width: 320px) {
        width: 50%;
        height: 75%;
    }

    @media (max-width: 720px) {
        width: 50%;
        height: 75%;
        margin-top: 2em;
        margin-bottom: 0;
        margin-left: 20%;
        margin-right: 20%;
    }
`;

const StyledH3 = Styled("h3")`
    font-size: 2.2em;
    padding-left: 0.5em;

    @media (max-width: 320px) {
        font-size: 1.7em;
        padding-left: 0;
    }
`;

const StyledP = Styled("p")`
    font-size: 1.8em;
    padding-left: 0.5em;

    @media (max-width: 320px) {
        font-size: 1.4em;
        padding-left: 0;
    }
`;

function PlayerData({ item }) {
    //console.log(item.name);
    const name = item.name;
    const country = item.country;
    const searches = item.searches;

    return (
        <StyledDiv className="playerData">
            <StyledH3>{name}</StyledH3>
            <br />
            <StyledP> Country: {country} </StyledP>
            <br />
            <StyledP> Searches: {searches} </StyledP>
        </StyledDiv>
    )
}

export default PlayerData;

