import React from 'react';
import './Subscription.css'

const Subscription = (props) => {
    return (
        <section className='subscription_section w-100'>
            <div className="subscription_data">
                <form action="" className='subscrip_btns'>
                    <button className="edit_subs">{props.subsc_button_1}</button>
                    <button className="free_trial">{props.subsc_button_2}</button>
                </form>
                <div className="subscrip_para">
                    <p>It will be delivered to you with free shipping, but you can <span>adjust or Cancel</span> at anytime.</p>
                </div>
            </div>
        </section>
    )
}

export default Subscription