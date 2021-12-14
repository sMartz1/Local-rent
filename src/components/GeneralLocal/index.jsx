import React, { Component } from 'react'
import './component.css'
import search from './img/search.png'

class GeneralLocal extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="general-local">
            <button><img src={search} alt="" /></button>
            <button><img src={search} alt="" /></button>
            <button><img src={search} alt="" /></button>
            <button><img src={search} alt="" /></button>
            <button><img src={search} alt="" /></button>
        </div>  );
    }
}
 
export default GeneralLocal;