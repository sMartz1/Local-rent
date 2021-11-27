import React, { Component } from 'react'
import './component.css'

import {size, type} from '../../data/selectOptions'

import CustomSelect from '../CustomSelect'
import SearchBar from './SearchBar'

class  SearchSection extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <section className="mainpage-search">
                <CustomSelect options={size}/>
                <CustomSelect options={type}/>
                <SearchBar/>
            </section>
        );
    }
}
 
export default SearchSection;