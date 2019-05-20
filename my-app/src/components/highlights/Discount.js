import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../ui/MyButton';


class Discount extends Component {
    state = {
      discountStart: 0,
      discountEnd: 30
    }
    percentage = () => {
      let stateCopy = {...this.state}
      if(stateCopy.discountStart < stateCopy.discountEnd) {
        this.setState((prevState)=>{
          return {
            discountStart: prevState.discountStart+1
          }
        })
      }
    }
    
    componentDidUpdate() {
      setTimeout(()=>{
        this.percentage()
      },30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                  <Fade
                    onReveal={()=> this.percentage()}
                  >
                    <div className="discount_porcentage">
                      <span>{this.state.discountStart}%</span>
                      <span>0FF</span>
                    </div>      
                  </Fade>
                  <Slide right>
                    <div className="discount_description">
                      <h3> Purchase tickets before the 20 october</h3>
                      <p>and get the discount</p>
                      <MyButton
                        text="purchase a ticket"
                        bck='green'
                        color='white'
                      />        
                    </div>      
                  </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;