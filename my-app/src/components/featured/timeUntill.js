import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class timeUntill extends Component {

    state = {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
        deadline: 'Dec, 25, 2019'
    }


    componentDidMount() {
        setInterval(()=>{
            this.getTimeUntill(this.state.deadline)
        },1000);
    }
    getTimeUntill(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      if(time < 0) {

      } else {
        const seconds = Math.floor((time/1000)%60)+1;
        const minutes = Math.floor((time/1000/60)%60);
        const hours   = Math.floor((time/(1000*60*60))%24);
        const days    = Math.floor(time/(1000*60*60*24));
        this.setState({
            days:days,
            hours: hours,
            seconds: seconds,
            minutes: minutes
        });
      }
      
    };
    render() {
        //todo - change on dynamic instead of static
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdownItem">
                            <div className="countdown_time">{this.state.days}</div>
                            <div className="countdown_tag">days</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">{this.state.hours}</div>
                            <div className="countdown_tag">hours</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">{this.state.minutes}</div>
                            <div className="countdown_tag">minutes</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">{this.state.seconds}</div>
                            <div className="countdown_tag">seconds</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default timeUntill;