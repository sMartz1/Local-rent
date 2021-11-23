import React, { Component } from 'react'
import './component.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (<div className="search-bar-container">
            <input type="text" />
        </div>  );
    }
}
 
export default SearchBar;