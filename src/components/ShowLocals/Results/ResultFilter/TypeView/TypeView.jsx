import React, { Component } from 'react';
import './component.css'

class TypeView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="type-view">
            <div className="type-view-option">a</div>
            <div className="type-view-option">b</div>
        </div>  );
    }
}
 
export default TypeView;