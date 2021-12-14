import React, { Component } from 'react';
import './component.css'

//Recieves an item to render.
class ResultItem extends Component {
    constructor(props) {
        super(props);
        this.state = { item : this.props.item }
    }
    render() { 
        return (<div className="result-item">
            <h2>{this.state.item.title}</h2>
            <h3>{this.state.item.price}</h3>
        </div>  );
    }
}
 
export default ResultItem;