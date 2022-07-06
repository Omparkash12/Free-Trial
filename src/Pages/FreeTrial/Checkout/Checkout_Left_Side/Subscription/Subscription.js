import React from 'react';
import './Subscription.css'

const Subscription = (props) => {
    return (
        <section className='subscription_section w-100'>
            <div className="subscription_data">
                <form action="" className='subscrip_btns'>
                    <a href='#delivery_section' className="edit_subs">{props.subsc_button_1}</a>
                    <a href='/#' className="free_trial">{props.subsc_button_2}</a>
                </form>
                <div className="subscrip_para">
                    <p>It will be delivered to you with free shipping, but you can <span>adjust or Cancel</span> at anytime.</p>
                </div>
            </div>
        </section>
    )
}

export default Subscription