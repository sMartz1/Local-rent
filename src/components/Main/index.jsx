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
            <div className="mainpage-container">
                <header className="mainpage-header">
                    <h1>Todos tenemos un sitio. Tu negocio, también</h1>
                    <section className="mainpage-search">
                        <CustomSelect options={size}/>
                        <CustomSelect options={type}/>
                        <SearchBar/>
                    </section>
                </header>
                <main className="mainpage-content">
                    <FeaturedLocals title={"Más demandados"} locals={locals}/>
                    <FeaturedLocals title={"Últimas ofertas"} locals={locals}/>
                </main>
                
            </div>  
        );
    }
}
 
export default Main;