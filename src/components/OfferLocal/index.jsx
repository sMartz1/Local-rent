import React, { Component } from 'react'


class OfferLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="offer-local-container">
            <p>Alquila tu local con nosotros!</p>
            <button>Añadir oferta de tu local</button>
        </div> );
    }
}
 
export default OfferLocal;