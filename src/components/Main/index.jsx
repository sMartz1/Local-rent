import React, { Component } from 'react'
import './component.css'

import {size, type} from '../../data/selectOptions'
import {locals} from '../../data/localInfo'

import SearchSection from '../SearchSection'
import FeaturedLocals from './FeaturedLocals'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div className="mainpage-container">
                <header className="mainpage-header">
                    <h1>Todos tenemos un sitio. Tu negocio, también.</h1>
                    <SearchSection />
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