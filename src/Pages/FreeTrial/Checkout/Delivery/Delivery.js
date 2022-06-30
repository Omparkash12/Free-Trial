import React, { useEffect } from 'react';
import './Delivery.css';
import Slider1 from 'react-slick';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// Images
import month_1 from '../../../Images/month_1.svg'
import month_2 from '../../../Images/month_2.svg'
import month_3 from '../../../Images/month_3.svg'

// Import css files
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";

const Delivery = () => {

    useEffect(() => {
        $(function ready() {
            $('.slider_data_1').on('click', function () {
                $('.slider_data_1').removeClass('mystyle');
                $(this).addClass('mystyle');
            })

            $(window).on('load', function () {
                $(".slider_data_1.onload").addClass('mystyle');
            });


            // Icons fill
            $('.coffee_icon').on('click', function () {
                $('.coffee_icon svg circle').addClass('progress_fill');
                $('.coffee_icon').addClass('coffee_icon_1');

                $('.delivery_icon svg circle').removeClass('progress_fill');
                $('.delivery_icon').removeClass('delivery_icon_1');
                $('.summery_icon svg circle').removeClass('progress_fill');
                $('.summery_icon').removeClass('summery_icon_1');
            })
            $(window).on('load', function () {
                $(".coffee_icon svg circle").addClass('progress_fill');
                $('.coffee_icon').addClass('coffee_icon_1');
            });


            $('.delivery_icon').on('click', function () {
                $('.delivery_icon svg circle').addClass('progress_fill');
                $('.delivery_icon').addClass('delivery_icon_1');

                $('.coffee_icon svg circle').removeClass('progress_fill');
                $('.coffee_icon').removeClass('coffee_icon_1');
                $('.summery_icon svg circle').removeClass('progress_fill');
                $('.summery_icon').removeClass('summery_icon_1');
            })

            $('.summery_icon').on('click', function () {
                $('.summery_icon svg circle').addClass('progress_fill');
                $('.summery_icon').addClass('summery_icon_1');

                $('.coffee_icon svg circle').removeClass('progress_fill');
                $('.coffee_icon').removeClass('coffee_icon_1');
                $('.delivery_icon svg circle').removeClass('progress_fill');
                $('.delivery_icon').removeClass('delivery_icon_1');
            })



            // Back Click
            $('.coffee_data').on('click', function () {
                $('.coffee_icon svg circle').addClass('progress_fill');
                $('.coffee_icon').addClass('coffee_icon_1');

                $('.delivery_icon svg circle').removeClass('progress_fill');
                $('.delivery_icon').removeClass('delivery_icon_1');
                $('.summery_icon svg circle').removeClass('progress_fill');
                $('.summery_icon').removeClass('summery_icon_1');
            })

            $('.delivery_data').on('click', function () {
                $('.delivery_icon svg circle').addClass('progress_fill');
                $('.delivery_icon').addClass('delivery_icon_1');

                $('.coffee_icon svg circle').removeClass('progress_fill');
                $('.coffee_icon').removeClass('coffee_icon_1');
                $('.summery_icon svg circle').removeClass('progress_fill');
                $('.summery_icon').removeClass('summery_icon_1');
            })

            $('.summery_data').on('click', function () {
                $('.summery_icon svg circle').addClass('progress_fill');
                $('.summery_icon').addClass('summery_icon_1');

                $('.coffee_icon svg circle').removeClass('progress_fill');
                $('.coffee_icon').removeClass('coffee_icon_1');
                $('.delivery_icon svg circle').removeClass('progress_fill');
                $('.delivery_icon').removeClass('delivery_icon_1');
            })
        })
    }, [])





    const slider1 = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }



    return (
        <section id='delivery_section' className='delivery_section'>
            <div className="delivery_data progressBar_fill">
                <div className="deliver_heading">
                    <h4>Delivery Frequency</h4>
                </div>

                <div className="slider_data">
                    <Slider1 className="" {...slider1}>
                        <div className="slider_data_2">
                            <div className="slider_data_1 onload">
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every Month</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1">
                                <div className="slider_image">
                                    <img src={month_2} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 2 Month</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1">
                                <div className="slider_image">
                                    <img src={month_3} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 3 Month</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1">
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 4 Month</h5>
                                </div>
                            </div>
                        </div>
                    </Slider1>
                </div>
            </div>
        </section>
    )
}

export default Delivery;