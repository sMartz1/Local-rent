import React, { Component } from "react";
import Slider from "react-slick";

import "./component.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: this.props.dots != null ? this.props.dots : true,
        infinite: true,
        speed: this.props.speed != null ? this.props.speed : 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: this.props.autoPlay != null ? this.props.autoPlay : false,
        autoplaySpeed:
          this.props.autoPlaySpeed != null ? this.props.autoPlaySpeed : 3000,
        arrow: this.props.arrow != null ? this.props.arrow : true,
        
      },
      className: this.props.className != null ? this.props.className : "gallery",
      imgClass:this.props.imgClass != null ? this.props.imgClass : "img-slider",
      images: this.props.images,
    };
  }
  render() {
    return (
      <div className={this.state.className}>
        <Slider {...this.state.settings}>
          {this.state.images.map((img) => {
            return (
              <img
                src={img}
                className={this.state.imgClass}
                alt=""
                key={img.toString()}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
