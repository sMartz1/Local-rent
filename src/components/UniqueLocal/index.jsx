import React, { Component } from "react";
import "./component.css";
import Gallery from "./Gallery";
class UniqueLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      prevLocal: this.props.prevLocal,
      nextLocal: this.props.nextLocal,
      images: this.props.images
    };
  }
  render() {
    return (
      <div className="unique-local">
        <div className="local-title">{this.state.title}</div>
        <Gallery images={this.state.images} />
        <div className="local_content"></div>
      </div>
    );
  }
}

export default UniqueLocal;
