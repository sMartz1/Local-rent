import React, { Component } from 'react'
import Slider from "react-slick";

import './component.css'
class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  settings : {dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1},
         images : this.props.images }
    }
    render() { 
        return (<div className="gallery">
            <Slider {...this.state.settings}>
                {this.state.images.map(img =>{
                    return <img src={img} className="img-slider" alt="" key={img.toString()} />
                })}
            </Slider>
        </div>  );
    }
}
 
export default Gallery;