import React, { Component } from 'react'
import './component.css'
import search from './img/search.png'
import SearchSection from '../SearchSection';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.state = { logoImage : "path", title:"Local RENT",
                       showButton: this.props.showSeacrh, showModal:false }
    }

    toggleSearch(){
        this.setState(state=>({...state, showModal: !this.state.showModal}))
    }

    

    render() { 
        window.onscroll = ()=>{
            console.log(document.body.scrollHeight);
            if(document.body.scrollHeight < 200){
                this.setState(state=>({...state, showButton: true}))
            } else {
                this.setState(state=>({...state, showButton: false}))
            }
        };
        return (<div className="header">
            <h2>{this.state.title}</h2>
            <img src={this.state.logoImage} alt="" />
            {
                this.state.showButton && 
                <button onClick={this.toggleSearch}>
                    Buscar <img src={search} alt="open search modal" />
                </button>
            }
            
            {this.state.showModal && <div className="search-modal"><SearchSection/></div>}
        </div>  );
    }
}
 
export default Header;