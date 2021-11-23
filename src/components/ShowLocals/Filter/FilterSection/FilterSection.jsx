import React, { Component } from 'react';
import FilterItem from '../FilterItem/FilterItem'
import './component.css'

class FilterSection extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="filter-section">
            <FilterItem type={"TypeAExample"} />
        </div>  );
    }
}
 
export default FilterSection;