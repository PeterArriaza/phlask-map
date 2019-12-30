import React, { Component } from "react";
import { Card, Modal, Button } from "react-bootstrap";

export class ClosestTap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: <p style={{ display: "inline-block" }}>Click for nearest tap!</p>,
      show: false
    };

    this.change = this.change.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  change() {
    if (this.props.lat === "" || this.props.lon === "") {
      this.setState({
        text: (
          <p>
            The closest tap feature is unavailable. We require permission to
            access your location to provide it.
          </p>
        )
      });
    } else {
      this.setState({
        text: (
          <p style={{ display: "inline-block" }}>
            The closest tap is: {this.props.org} <br />
            Located at: &nbsp;
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
        )
      });
    }
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="closestTap">
        <Card>
          <Card.Header
            onClick={this.change}
            style={{ display: "inline", paddingBottom: "0px" }}
          >
            {this.state.text}
            <img
              onClick={this.handleShow}
              title="Add a new tap"
              className="add-tap"
              src="https://image.flaticon.com/icons/png/512/61/61112.png"
            ></img>
          </Card.Header>
        </Card>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ClosestTap;
