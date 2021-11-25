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
      images: [
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115909/Local-alquiler-MADRID-referencia-161611.jpg",
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115915/Local-alquiler-MADRID-referencia-161611-2.jpg",
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115918/Local-alquiler-MADRID-referencia-161611-3.jpg",
      ] /*this.props.images*/,
    };
  }
  render() {
    return (
      <div className="unique-local">
        UniqueLocalContainer
        <div className="local-title">TITLE LOCAL</div>
        <Gallery images={this.state.images} />
        <div className="local_content"></div>
      </div>
    );
  }
}

export default UniqueLocal;
