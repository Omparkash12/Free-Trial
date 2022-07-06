import React from 'react';
import './Checkout.css'
import Coffee from '../Checkout/Checkout_Left_Side/Coffee/Coffee';
import Delivery from '../Checkout/Checkout_Left_Side/Delivery/Delivery';
import OrderConfirmation from '../Checkout/Checkout_Left_Side/OrderConfirmation/OrderConfirmation';
import ProgressBar from '../Checkout/Checkout_Left_Side/ProgressBar/ProgressBar';

// images
import product_image from '../../Images/product_image.svg'
import Subscription from '../Checkout/Checkout_Left_Side/Subscription/Subscription';
import FAQ from '../Checkout/Checkout_Left_Side/FAQ/FAQ';
import ProductReview from '../Checkout/Checkout_Right_Side/ProductReview/ProductReview';
import CustomerReviews from '../Checkout/Checkout_Right_Side/CustomerReviews/CustomerReviews';
import WhyChooseUs from '../Checkout/Checkout_Right_Side/Why_Choose_Us/WhyChooseUs';


const Checkout = () => {
    return (
        <section className='checkout_section'>
            <div className="checkout_all_data">
                <div className="checkout_left_section">
                    <div className="checkout_left_section_1">
                        <ProgressBar />
                        <Coffee />
                        <Delivery />
                        <OrderConfirmation product_image={product_image} heading1='Home Compostable' heading2='Coffee Pods' product_price='$52.80' />
                        <Subscription subsc_button_1='Edit subscription' subsc_button_2='Get My Free Trial' />
                    </div>
                    <FAQ faq_heading='Frequently Asked Questions' faq_button_1='Home Compostable Pods' faq_button_2='Our Coffee' faq_button_3='Subscriptions' />

                </div>

                <div className="checkout_right_section">
                    <div className="checkout_right_section_1">
                        <ProductReview />
                        <CustomerReviews />
                        <WhyChooseUs />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout