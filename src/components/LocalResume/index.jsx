import React, { Component } from 'react'
import './component.css'

class LocalResume extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 

        const {id, name, price} = this.props.local;

        return (
            <div className="local-resume-container">
                <h1>{name}: {price}</h1>
                <img src="https://www.tcgroupsolutions.com/wp-content/uploads/2021/03/retail-intelligence-tc-street-2.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, asperiores, accusamus facilis soluta error molestiae ratione tempora vitae modi voluptatem officia iure non. Totam et animi aliquam recusandae, consectetur quisquam voluptas accusamus placeat error! Eveniet sapiente voluptate exercitationem vel fugiat nemo, voluptatum et esse minima similique tenetur accusantium adipisci sint, fuga odio officiis laudantium molestiae labore tempore, ex quia aliquid!</p>
            </div>  
        );
    }
}
 
export default LocalResume;