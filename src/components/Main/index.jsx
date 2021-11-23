import React, { Component } from 'react'
import './component.css'

import {size, type} from '../../data/selectOptions'
import {locals} from '../../data/localInfo'

import CustomSelect from '../CustomSelect'
import FeaturedLocals from './FeaturedLocals'
import SearchBar from './SearchBar'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div className="main-container">
                <h1>MAIN</h1>
                <section className="search-container">
                    <CustomSelect options={size}/>
                    <CustomSelect options={type}/>
                    <SearchBar/>
                </section>
                
                <FeaturedLocals locals={locals}/>
            </div>  
        );
    }
}
 
export default Main;