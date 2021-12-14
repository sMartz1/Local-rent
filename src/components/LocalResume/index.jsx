import React, { Component } from 'react'
import GeneralLocal from '../GeneralLocal';
import './component.css'

class LocalResume extends Component {
    constructor(props) {
        super(props);
    }
    render() { 

        const {id, title, price, description} = this.props.local;

        console.log(this.props.local.description);

        return (
            <div className="local-resume-container">
                <h1>{title}: {price}</h1>
                <img src="https://www.tcgroupsolutions.com/wp-content/uploads/2021/03/retail-intelligence-tc-street-2.png" alt="" />
                <p>{description}</p>
                <GeneralLocal />
            </div>  
        );
    }
}
 
export default LocalResume;