import React from 'react';
import './FreeTrialAvailable.css';

const FreeTrialAvailable = (props) => {
  return (
    <section className='timer_section'>
        <div className="container_div">
            <div className="time_data">
                <h3>{props.timerHeading}</h3>
                <p className='d-flex align-items-center justify-content-center'>Only<h6>{props.leftStock}</h6>left in stock, offer ends in</p>

                <div className="counter_timer">
                    <div className="time_Items">
                        <h1>{props.days}</h1>
                        <h5>Days</h5>
                    </div>
                    <div className="time_Items">
                        <h1>{props.hours}</h1>
                        <h5>Hours</h5>
                    </div>
                    <div className="time_Items">
                        <h1>{props.minutes}</h1>
                        <h5>Minutes</h5>
                    </div>
                    <div className="time_Items m-0">
                        <h1>{props.seconds}</h1>
                        <h5>Seconds</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FreeTrialAvailable;