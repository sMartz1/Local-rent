import React, { Component } from 'react'
import Filter from './Filter';
import './component.css'
import ShowResults from './ShowResults/ShowResults';
import Map from "components/Map";
import {locals} from 'data/localInfo'

class ShowLocals extends Component {
    constructor(props) {
        super(props);
        this.state = { data: locals }
    }
    render() { 
        return ( <div className="show-locals-container">
            <div className="results">
              <ShowResults items={this.state.data}/>
            </div>
            <div className="map-container">
                  <Map />
            </div>
            
          
        </div> );
    }
}
 
export default ShowLocals;