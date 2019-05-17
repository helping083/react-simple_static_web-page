import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class timeUntill extends Component {

    state = {
        days: {
            time: null,
            tag: 'days'
        },
        hours: {
            time: null,
            tag: 'hours'
        },
        minutes: {
            time: null,
            tag: 'minutes'
        },
        seconds: {
            time: null,
            tag: 'seconds'
        }
    }

    render() {
        //todo - change on dynamic instead of static
        return (
            <Slide left>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        event starts in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdownItem">
                            <div className="countdown_time">23</div>
                            <div className="countdown_tag">days</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">2</div>
                            <div className="countdown_tag">hours</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">30</div>
                            <div className="countdown_tag">minutes</div>
                        </div>
                        <div className="countdownItem">
                            <div className="countdown_time">50</div>
                            <div className="countdown_tag">seconds</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default timeUntill;