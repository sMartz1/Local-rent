import React, { Component } from 'react';
import ResultSort from './ResultSort/ResultSort';
import TypeView from './TypeView/TypeView'
import './component.css'

class ResultFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { type : this.props.type }
    }
    render() { 
        return (<div className="type-view">
            <ResultSort />
            <TypeView />
        </div>  );
    }
}
 
export default ResultFilter;