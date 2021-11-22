import React, { Component } from 'react'

import './component.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { logoImage : "path",
                        title:"Local RENT" }
    }
    render() { 
        return (<div className="header">
            <h2>{this.state.title}</h2>
            <img src={this.state.logoImage} alt="" />
        </div>  );
    }
}
 
export default Header;