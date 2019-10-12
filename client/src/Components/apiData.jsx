import React, { Component } from "react";
import PlayerData from "./playerData";
//import axios from "axios";

class PlayerAPI extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(player => this.setState({
          player: player.data
        }))
      .catch(err => {
        console.log('Error retrieving Player Data ', err)
      })
    }
    
  render() {
    console.log(this.state);
    return (
      <div className="PlayerAPI">
        {this.state.player.map((item, index) => (
          <PlayerData item={item} key={index} />
      ))}
      </div>
    )
  }

}

export default PlayerAPI;