import React, { Component } from 'react'
import './component.css'
import search from './img/search.png'
import logo from './img/grow-shop.png'
import SearchSection from '../SearchSection';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.showSignIn = this.showSignIn.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
        this.state = { title:"Local RENT", showButton: false, 
                        showModal:false, signIn:false, signUp:false }
    }

    toggleSearch(){
        this.setState(state=>({...state, showModal: !this.state.showModal}));
    }

    showSignIn(){}
    showSignUp(){}

    render() { 
        window.onscroll = ()=>{
            if(window.pageYOffset > 235){
                this.setState(state=>({...state, showButton: true}))
            } else {
                this.setState(state=>({...state, showButton: false}))
                this.setState(state=>({...state, showModal: false}))
            }
        };
        return (
        <div className="header">
            <img src={logo} alt="" />
            <h2>{this.state.title}</h2>
            {
                this.state.showButton && 
                <button className="show-search-modal" onClick={this.toggleSearch}>
                    Buscar <img src={search} alt="open search modal" />
                </button>
            }
            {(this.state.showModal && this.props.showSeacrh) && 
            <div className="search-modal">
                <SearchSection/>
            </div>}

            <a className="link" href="#">Anúnciate (C:OfferLocal)</a>

            <a  href="#" onClick={this.showSignIn}>Sign in</a>/
            <a className="auth" href="#" onClick={this.showSignUp}>Sign up</a>
            { this.state.signIn && <SignIn />}
            { this.state.signUp && <SignUp />}
            
        </div>  );
    }
}
 
export default Header;