import React, { Component } from 'react';
import MyButton from '../ui/MyButton';
import Zoom from 'react-reveal/Zoom'
//todo: dynamic
class Pricing extends Component {

    state={
        prices : [100,150,250],
        position:  ['Balcony', 'Medium', 'fan-zone'],
        desc: [
            'lorem','lorem','lorem'
        ],
        linkto:['https://www.arianagrande.com/','https://www.arianagrande.com/','https://www.arianagrande.com/'],
        delay: [500,0,1000]
    }

    showBoxes=()=>(
        this.state.prices.map((item,index)=>(
          <Zoom delay={this.state.delay[index]} key={index}>
            <div className="pricing_item">
              <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${item}</span>
                    <span>{this.state.position[index]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[index]}
                </div>
                <div className="pricing_buttons">
                    <MyButton
                        ticketIcon = {this.state.linkto[index]}
                        bck = 'orange'
                        color="white"
                        text = 'buy a ticket'
                    />
                </div>
              </div>
            </div>
          </Zoom>
        ))
    );

    render() {
        return (
            <div className="bck_black">
              <div className=" center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                  {this.showBoxes()}
                </div>
              </div>    
            </div>
        );
    }
}

export default Pricing;