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
            {
             //Item content
            }
        </div>  );
    }
}
 
export default ResultItem;