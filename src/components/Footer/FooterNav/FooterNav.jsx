import React, { Component } from 'react';



class FooterNav extends Component {
    constructor(props) {
        super(props);
        this.state = { options :this.props.options }
    }
    render() { 
        return ( <><ul>
            {this.state.map(x =>{
                return <li>{x}</li>
            })}
            </ul></> );
    }
}
 
export default FooterNav;