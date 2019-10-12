import React, { Component } from "react";
import PlayerData from "./playerData";
import axios from "axios";

class PlayerAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        }
      }
    
      componentDidMount() {
          axios.get('http://localhost:5000/api/players')
            .then(result => {
                this.setState({
                data: result.data
                })
            })
            .catch(err => {
                console.log('Cannot retrieve Player API at this time ', err)
            })
        } 
        
      render() {
        return (
          <div>
            {this.state.data.map((item, index) => (
              <PlayerData item={item} key={index} />
          ))}
          </div>
        )
      }
}

export default PlayerAPI;