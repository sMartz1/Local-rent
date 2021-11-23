import React, { Component } from 'react'
import './component.css'
//Recieves a list of locals to show.
class FeaturedLocals extends Component {
    constructor(props) {
        super(props);
        this.state = { items : this.props.items }
    }
    render() { 
        return (<div className="featured-locals">
        </div>  );
    }
}
 
export default FeaturedLocals;