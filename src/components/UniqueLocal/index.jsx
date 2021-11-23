import React, { Component } from "react";
import "./component.css";
class UniqueLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      prevLocal: this.props.prevLocal,
      nextLocal: this.props.nextLocal,
    };
  }
  render() {
    return (
      <div className="unique-local">
        <div className="local-title"></div>
      </div>
    );
  }
}

export default UniqueLocal;
