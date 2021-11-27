import './component.css'
import React, { Component } from 'react'
import search from './img/search.png'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (<div className="search-bar-container">
            <input type="text" placeholder="municipio, barrio, calle..."/>
            <button><img src={search} alt="" /></button>
        </div>  );
    }
}
 
export default SearchBar;