import React, { Component } from "react";
import {Card} from "react-bootstrap";


export class ClosestTap extends Component {
  constructor(props) {
    super(props);

    this.state = {
        textColor:"black",
        padding: "1.25rem",
        color: "light",
        text : "Click me for closest tab!"
    };

    this.change = this.change.bind(this);
    }

  change(){
    if(this.props.lat === "" || this.props.lon === ""){
      this.setState({
        textColor:"white",
        padding:0,
        color:"failure",
        text: <p>
        The closest tap feature is unavailable. We require permission
        to access your location to provide it.
      </p>
      })
    }
    else{
      this.setState({
        textColor:"white",
        padding:0,
        color: "success",
        text: <p>
        The closest tap is: {this.props.org} <br />
        Located at:   &nbsp;
        <a
          href={
            "https://www.google.com/maps/search/?api=1&query=" +
            this.props.lat +
            ", " +
            this.props.lon
          }
        >
          {this.props.address}
        </a>
      </p>  
      });
    }
  }

  render() {
    return (
      <div className = "closestTap"   >
        <Card bg = {this.state.color}>
          <Card.Body onClick={this.change} style = {{padding:  this.state.padding, color: this.state.textColor}}>
              {this.state.text}
          </Card.Body>   
        </Card>
      </div>
    );
  }
}

export default ClosestTap;
