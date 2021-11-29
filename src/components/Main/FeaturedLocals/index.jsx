import React, { Component } from 'react'
import './component.css'

import LocalResume from 'components/LocalResume';
//Recieves a list of locals to show.
class FeaturedLocals extends Component {
    constructor(props) {
        super(props);
        this.state = { items : this.props.items }
    }
    render() { 
        return (
        <div className="featured-locals">
            {this.props.locals.map((local)=><LocalResume local={local}/>)}
        </div>  
        );
    }
}
 
export default FeaturedLocals;