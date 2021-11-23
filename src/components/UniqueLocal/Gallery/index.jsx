import React, { Component } from 'react'
import './component.css'
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { images: this.props.images  }
    }
    render() { 
        return (<div className="gallery">
            Galeria
        </div>  );
    }
}
 
export default Gallery;