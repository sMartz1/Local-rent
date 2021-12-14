import React, { Component } from 'react'
import './component.css'

// import CustomButton from '@mui/material/CustomButton'

import {size, type} from '../../data/selectOptions'
import {locals} from '../../data/localInfo'

import SearchSection from '../SearchSection'
import FeaturedLocals from './FeaturedLocals'
// import Contact from './Contact'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {contact:false}
    }
    render() { 
        return (
            <div className="mainpage-container">
                <header className="mainpage-header">
                    <h1>Todos tenemos un sitio. Tu negocio, también.</h1>
                    <SearchSection />
                </header>
                <main className="mainpage-content">
                    <FeaturedLocals key={1} title={"Más demandados"} locals={locals}/>
                    <FeaturedLocals key={2} title={"Últimas ofertas"} locals={locals}/>
                </main>
                <button className='contact'>Contáctanos</button>
                {/* <CustomButton className='contact'>Button</CustomButton> */}
                {/* <Contact /> */}
                
            </div>  
        );
    }
}
 
export default Main;