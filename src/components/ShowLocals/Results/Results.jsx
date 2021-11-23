import React, { Component } from 'react'
import ResultFilter from './ResultFilter/ResultFilter';
import './component.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (<div className="results-container">
            <ResultFilter />
        </div>  );
    }
}
 
export default Header;