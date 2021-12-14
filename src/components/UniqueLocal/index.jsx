// import React, { Component } from "react";
// import Divider from "@mui/material/Divider"
// import "./component.css";
// import Gallery from "./Gallery";
// import Map from "components/Map";
// import PhotoSizeSelectSmallIcon from '@mui/icons-material/PhotoSizeSelectSmall';
// import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
// import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
// import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
// import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import { yellow } from "@mui/material/colors";
// class UniqueLocal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Local en las ventas"/*this.props.title*/,
//       prevLocal: this.props.prevLocal,
//       nextLocal: this.props.nextLocal,
//       images: [
//         "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115909/Local-alquiler-MADRID-referencia-161611.jpg",
//         "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115915/Local-alquiler-MADRID-referencia-161611-2.jpg",
//         "https://cdn.hqrealty.com/wp-content/uploads/2020/06/03115918/Local-alquiler-MADRID-referencia-161611-3.jpg",
//       ] /*this.props.images*/,
//       rating: this.props.rating,
//       description: this.props.description,
//       specs:this.props.specs

//     };
//   }
//   render() {
//     return (
//       <div className="unique-local">
       
       
//         <div className="local-header">
//           <img src={this.state.images[0]} alt="" />
//         </div>
       
//         <div className="local-content">
        
//           <div className="local-information">
             
//           <div className="local-description">
//              {/**this.specs.price*/}<p className="price-label">0€ <small>/dia</small></p>
//              <div className="center-description">
//              <p className="title-description">Title local{/*this.state.title*/}<span>{/*this.state.rating.score*/} 4/5 <StarOutlinedIcon sx={{ color:yellow[600],fontSize:15 }}  />  de 666 votos.</span></p>
//             <Divider />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Nesciunt eligendi velit consequatur alias repellat corporis perferendis magnam quidem 
//               eaque aliquid excepturi veniam facilis, esse nisi, voluptates natus vitae. Omnis, aperiam.
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Nesciunt eligendi velit consequatur alias repellat corporis perferendis magnam quidem 
//               eaque aliquid excepturi veniam facilis, esse nisi, voluptates natus vitae. Omnis, aperia
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Nesciunt eligendi velit consequatur alias repellat corporis perferendis magnam quidem 
//               eaque aliquid excepturi veniam facilis, esse nisi, voluptates natus vitae. Omnis, aperia</p>
              
            
//             {/*this.state.description */}      
//              </div>
              
//           <div className="local-specifications">
//           {/*this.state.specs.map(spec=>{
//             return <p>{spec}</p>
//           }) */}
//           <p> <PhotoSizeSelectSmallIcon /> 200 m² construidos</p>
//           <p><CottageOutlinedIcon />Segunda mano/buen estado</p>
//           <p><MeetingRoomOutlinedIcon />Distribución 2 estancias</p>
//           <p><WcOutlinedIcon />1 aseos o baños</p>
//           <p><EmojiTransportationOutlinedIcon />Situado a pie de calle</p>
//           </div>
//           </div>
         
//           </div>      
         
//         </div>
//         <div className="local-map">
//             <Map />
//             </div>  

//         <div className="footer-slider">
//         <Gallery className={"footer-galery"} imgClass={"img-slider-footer"} images={this.state.images} speed={2000} dots={true} autoPlay={true} autoPlaySpeed={4000}/>
//           </div>
        
//       </div>
//     );
//   }
// }

// export default UniqueLocal
