import React, { Component } from 'react'
import FooterNav from './FooterNav/FooterNav';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { optionsA : ["Quienes somos","Trabaja con nosotros","FAQ"],
                        optionsB : ["loren","ippppp","suu"],
                    socialItems: [{name:"facebook",img:".path"},{name:"x",img:".path"},{name:"x",img:".path"}]  }
    }
    render() { 
        
        return (<div className="footer">
            <FooterNav options={this.state.optionsA} />
            <FooterNav options={this.state.optionsB} />
            <div className="social-icons">
                {
                    this.state.socialItems.map(itemMedia=>{
                        return<div className="media-button">
                            <img src={itemMedia.img} alt={itemMedia.name} />
                        </div>
                    })
                }
            </div>
        </div>);
    }
}
 
export default Footer;


