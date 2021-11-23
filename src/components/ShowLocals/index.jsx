import React, { Component } from 'react'
import Filter from './Filter';
import './component.css'


class ShowLocals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="show-locals-container">
            <Filter />
        </div> );
    }
}
 
export default ShowLocals;