import React, { Component } from 'react'
import './component.css'
class CustomSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="custom-select">
        </div>  );
    }
}
 
export default CustomSelect;