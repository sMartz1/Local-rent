import React, { Component } from 'react';
import FilterSection from './FilterSection/FilterSection';
import './component.css'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="filter-section">
            <FilterSection />
            <FilterSection />

        </div>  );
    }
}
 
export default Filter;