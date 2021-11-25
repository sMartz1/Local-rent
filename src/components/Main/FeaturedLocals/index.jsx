import React, { Component } from 'react'
import Slider from 'react-slick';
import LocalResume from '../../LocalResume';
import './component.css'

class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider">
          <h2> Single Item</h2>
          <Slider {...settings}>
            {this.props.locals.map((local)=><LocalResume local={local}/>)}
          </Slider>
        </div>
      );
    }
  }

//Recieves a list of locals to show.
class FeaturedLocals extends Component {
    constructor(props) {
        super(props);
        this.state = { items : this.props.items }
    }
    // render() { 
    //     return (
    //     <div className="featured-locals">
    //         {this.props.locals.map((local)=><LocalResume local={local}/>)}
    //     </div>  
    //     );
    // }
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        };
        return (
          <div className="slider">
            <h2> Single Item</h2>
            <Slider {...settings}>
              {this.props.locals.map((local)=><LocalResume local={local}/>)}
            </Slider>
          </div>
        );
      }
}
 
export default FeaturedLocals;
