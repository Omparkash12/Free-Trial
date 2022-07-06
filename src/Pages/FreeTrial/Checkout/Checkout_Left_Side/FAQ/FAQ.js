import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import './FAQ.css';

const FAQ = (props) => {
    useEffect(() => {

        $(function ready() {
            $(window).on('load', function () {
                $('.faq_btn-1 button').addClass("active");
            })


            // $(".faq_accordion_1").hide();
            $(".faq_accordion_2").hide();
            $(".faq_accordion_3").hide();
            $('.faq_btn-1 button').on('click', function () {                
                $('.faq_btn-1 button').addClass("active");
                $('.faq_btn-2 button').removeClass("active");
                $('.faq_btn-3 button').removeClass("active");

                $('.faq_accordion_1').show();
                $('.faq_accordion_2').hide();
                $('.faq_accordion_3').hide();
                // $(this).show();
            })

            $('.faq_btn-2 button').on('click', function () {
                $('.faq_accordion_2').show();
                $('.faq_btn-2 button').addClass("active");
                $('.faq_btn-1 button').removeClass("active");
                $('.faq_btn-3 button').removeClass("active");

                $('.faq_accordion_1').hide();
                $('.faq_accordion_3').hide();
            })
            $('.faq_btn-3 button').on('click', function () {
                $('.faq_accordion_3').show();
                $('.faq_btn-3 button').addClass("active");
                $('.faq_btn-1 button').removeClass("active");
                $('.faq_btn-2 button').removeClass("active");

                $('.faq_accordion_2').hide();
                $('.faq_accordion_1').hide();
            })
        })



        $(function ready () {
            $('.faq_btn-1 button').on('click', function () {
                $('.faq_btn-1 button').addClass("active_button");
            })
        })
    }, [])



    return (
        <section className="faq_section w-100">
            <div className="faq_data">
                <div className="faq_heading">
                    <h4>{props.faq_heading}</h4>
                </div>

                <div className="faq_butons">
                    <div className="faq_btn-1">
                        <button className="">{props.faq_button_1}</button>
                    </div>
                    <div className="faq_btn-2">
                        <button className="">{props.faq_button_2}</button>
                    </div>
                    <div className="faq_btn-3">
                        <button className="">{props.faq_button_3}</button>
                    </div>
                </div>

                <div className="faq_accordion faq_accordion_1">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I compost your pods?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Which coffee machines are bo pods compatible with?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Don’t Nespresso® recycle their pods? Why are bo pods more sustainable?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                    What are bo pods made out of?
                                </button>
                            </h2>
                            <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                    What certifications do you have for home compostability?
                                </button>
                            </h2>
                            <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="heading_5" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="faq_accordion faq_accordion_2">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I compost your pods?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Which coffee machines are bo pods compatible with?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>



                <div className="faq_accordion faq_accordion_3">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I compost your pods?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;