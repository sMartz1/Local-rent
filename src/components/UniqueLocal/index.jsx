import React, { Component } from "react";
import "./component.css";
import Gallery from "./Gallery";
class UniqueLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Local en las ventas"/*this.props.title*/,
      prevLocal: this.props.prevLocal,
      nextLocal: this.props.nextLocal,
      images: [
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115909/Local-alquiler-MADRID-referencia-161611.jpg",
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115915/Local-alquiler-MADRID-referencia-161611-2.jpg",
        "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115918/Local-alquiler-MADRID-referencia-161611-3.jpg",
      ] /*this.props.images*/,
      rating: this.props.rating,
      description: this.props.description,
      specs:this.props.specs

    };
  }
  render() {
    return (
      <div className="unique-local">
       <div className="local-title"><p className="shadow-4">TITLE LOCAL{/*this.state.title*/}</p></div> 
       
        <Gallery images={this.state.images} imgClass={"img-slider-header"} className={"gallery gallery-header"}speed={500} dots={false} autoPlay={true} autoPlaySpeed={15000} arrow={false}/>
       
        <div className="local_content">
        
          <div className="local-information">
          <div className="local-description">
            <p className="title-description">Title local{/*this.state.title*/}<span> - Rating: {/*this.state.rating.score*/}4/5 de {/*this.state.rating.totalRatigns*/}24 puntiaciones</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi velit consequatur alias repellat corporis perferendis magnam quidem eaque aliquid excepturi veniam facilis, esse nisi, voluptates natus vitae. Omnis, aperiam.</p></div>
            {/*this.state.description */}          
          <div className="local-specifications">
          {/*this.state.specs.map(spec=>{
            return <p>{spec}</p>
          }) */}
          <p>200 m² construidos</p>
          <p>Segunda mano/buen estado</p>
          <p>Distribución 2 estancias</p>
          <p>1 aseos o baños</p>
          <p>Situado a pie de calle</p>
          <p>2 escaparates</p>

          </div>
          <div className="local-map">MAP WIP</div>  

          </div>      
         
        </div>
        <div className="footer-slider">
        <Gallery className={"footer-galery"} imgClass={"img-slider-footer"} images={this.state.images} speed={2000} dots={true} autoPlay={true} autoPlaySpeed={4000}/>
          </div>
        
      </div>
    );
  }
}

export default UniqueLocal
