import React, { Component } from 'react'
import Slider from 'react-slick';
import LocalResume from '../../LocalResume';
import './component.css'

//Recieves a list of locals to show.
class FeaturedLocals extends Component {
    constructor(props) {
        super(props);
        this.state = { items : this.props.items }
    }
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
            <h2> {this.props.title}</h2>
            <Slider key={5} {...settings}>
              {this.props.locals.map((local, id)=><LocalResume key={id+100} local={local}/>)}
            </Slider>
          </div>
        );
      }
}
 
export default FeaturedLocals;
