import React, { Component } from 'react'
import './component.css'

class CustomSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="custom-select">
            <select>
                {this.props.options.map((option, id) => <option key={id+50} value={option[0]}>{option[1]}</option>)}
            </select>
        </div>  );
    }
}
 
export default CustomSelect;