import React, { Component } from 'react';
import ResultItem from './ResultItem/ResultItem';
import './component.css'


//Revieves an array of items to render
class ShowResults extends Component {
    constructor(props) {
        super(props);
        this.state = { items : this.props.items }
    }
    render() { 
        return (<div className="show-results">
            {
                this.state.items.map(item=><ResultItem item={item} />)
            }
        </div>  );
    }
}
 
export default ShowResults;