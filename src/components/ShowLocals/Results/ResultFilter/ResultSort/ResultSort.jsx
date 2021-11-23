import React, { Component } from "react";
import "./component.css";

class ResultSort extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="result-sort">
        <div>
          Ordenar por :
          <select>
            <option>Precio</option>
            <option>Distancia</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ResultSort;
