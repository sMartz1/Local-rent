import React, { Component } from 'react';
import './component.css'

class FilterItem extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="filter-item">
            
        </div>  );
    }
}
 
export default FilterItem;