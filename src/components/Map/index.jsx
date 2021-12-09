import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
 
export class MapContainer extends React.Component {
    
 constructor(props){
     super(props);
     const defaultPos = {
        lat: 40.854885,
        lng: -88.081807
      };
     this.state = {
         position : this.props.position != null ? this.props.position : defaultPos,
         mapStyle :[
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#71d6ff"
                    },
                    {
                        "saturation": 100
                    },
                    {
                        "lightness": -5
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#deecec"
                    },
                    {
                        "saturation": -73
                    },
                    {
                        "lightness": 72
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#bababa"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 25
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#e3e3e3"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#59cfff"
                    },
                    {
                        "saturation": 100
                    },
                    {
                        "lightness": 34
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]

     }
     this.mapLoaded = this.mapLoaded.bind(this);
   }
   componentDidMount() {
       
   }

mapLoaded(mapProps, map) {
    map.setOptions({
       styles: this.state.mapStyle
    })
 }
    
  render() {
   


    return (
      <Map 
      google={this.props.google} 
      zoom={14}
      onReady={(mapProps, map) => this.mapLoaded(mapProps, map)}
      initialCenter={this.state.position}

      >
          

 
     
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDsGEzmdf-D0CWhqdW-sZ_uBw6K8XKgd9s")
})(MapContainer)