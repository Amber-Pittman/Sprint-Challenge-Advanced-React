import React from "react";

function PlayerData({ item }) {
    const name = item.name;
    const country = item.country;
    const searches = item.searches;

    return (
        <div className="playerData">
            <h2>{name}</h2>
            <p>Country: {country} </p>
            <p>Searches: {searches} </p>
        </div>
    )
}

export default PlayerData;

