import React from 'react';
import './CustomerReviews.css';

// Images
import profile_img_1 from '../../../../Images/profile_img_1.svg';
import profile_img_2 from '../../../../Images/profile_img_2.svg';
import review_stars from '../../../../Images/review_stars.svg';
import ReviewHeading from '../ReviewHeading/ReviewHeading';

const CustomerReviews = () => {
    return (
        <section className="customer_reviews_section">
            <div className="customer_review_data">
                <ReviewHeading heading_text='TRUSTED CUSTOMER REVIEWS' />

                <div className="review_profile">
                    <div className="profile_1">
                        <div className="profile_image">
                            <img src={profile_img_1} alt="" />
                        </div>

                        <div className="profile_data">
                            <div className="profile_data_1">
                                <div className="stars d-flex">
                                    <img src={review_stars} alt="" />
                                    <p>Carly W.</p>
                                </div>
                                <div className='profile_data_2'>
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.73571 8.07473L2.83889 6.13369L3.67349 5.27963L4.73571 6.36661L6.78428 4.27029L7.61888 5.12435L4.73571 8.07473ZM10.3503 1.94104C8.22586 1.94104 6.55666 1.31991 5.19095 0C3.74937 1.31991 2.15604 1.94104 0.0316005 1.94104C0.0316005 5.43491 -0.727127 10.404 5.19095 12.4227C11.0332 10.404 10.3503 5.43491 10.3503 1.94104Z" fill="#3DBF22" />
                                    </svg>
                                    Verified Buyer
                                </div>
                            </div>
                            <p className='profile_large_text'>“LOVE! Best sheets ever. So luxurious. So soft. I was skeptical but they do what they say. 1 month in and still no odors.”</p>
                        </div>
                    </div>


                    <div className="profile_1 p-0">
                        <div className="profile_image">
                            <img src={profile_img_2} alt="" />
                        </div>

                        <div className="profile_data">
                            <div className="profile_data_1">
                                <div className="stars d-flex">
                                    <img src={review_stars} alt="" />
                                    <p>Rebecca M.</p>
                                </div>
                                <div className='profile_data_2'>
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.73571 8.07473L2.83889 6.13369L3.67349 5.27963L4.73571 6.36661L6.78428 4.27029L7.61888 5.12435L4.73571 8.07473ZM10.3503 1.94104C8.22586 1.94104 6.55666 1.31991 5.19095 0C3.74937 1.31991 2.15604 1.94104 0.0316005 1.94104C0.0316005 5.43491 -0.727127 10.404 5.19095 12.4227C11.0332 10.404 10.3503 5.43491 10.3503 1.94104Z" fill="#3DBF22" />
                                    </svg>
                                    Verified Buyer
                                </div>
                            </div>
                            <p className='profile_large_text'>“So far, I am very happy with the Miracle sheets! It's true, they don't smell, and it's true, I don't have bed smell. I have long believed in silver for combating bacteria, and think the sheets are a perfect idea. They are cool to sleep on and feel soft and "silky". I'm very pleased I purchased the Sateen Luxe sheets.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews;