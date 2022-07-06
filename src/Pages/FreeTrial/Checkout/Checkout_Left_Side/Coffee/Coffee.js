import React, { useState, useEffect } from 'react';
import './Coffee.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// Images
import smallest_image from '../../../../Images/desc_smallest_img.svg';
import desc_image_1 from '../../../../Images/desc_image_1.svg';
import desc_image_2 from '../../../../Images/desc_image_2.svg';
import desc_image_3 from '../../../../Images/desc_image_3.svg';
import desc_image_4 from '../../../../Images/desc_image_4.svg';


const Coffee = () => {
    const [quantity, setCount] = useState(0);
    const increment = () => {
        setCount(quantity + 1);
    }
    const decrement = () => {
        if (quantity >= 1) {
            setCount(quantity - 1);
        }
    }

    const [quantity_1, setCount_1] = useState(0);
    const increment_1 = () => {
        setCount_1(quantity_1 + 1);
    }
    const decrement_1 = () => {
        if (quantity_1 >= 1) {
            setCount_1(quantity_1 - 1);
        }
    }

    const [quantity_2, setCount_2] = useState(0);
    const increment_2 = () => {
        setCount_2(quantity_2 + 1);
    }
    const decrement_2 = () => {
        if (quantity_2 >= 1) {
            setCount_2(quantity_2 - 1);
        }
    }

    const [quantity_3, setCount_3] = useState(0);
    const increment_3 = () => {
        setCount_3(quantity_3 + 1);
    }
    const decrement_3 = () => {
        if (quantity_3 >= 1) {
            setCount_3(quantity_3 - 1);
        }
    }


    useEffect(() => {
        
        $(function ready() {
            $('.coffee_desc').on('click', function () {
                $('.coffee_desc').removeClass('mystyle_1');
                $(this).addClass('mystyle_1');
            })

            $(window).on('load', function () {
                $(".coffee_desc.onload").addClass('mystyle_1');
            });
        })
    }, [])
    


    return (
        <section id='coffee_section' className='coffee_section'>
            <div className="coffee_data progressBar_fill">
                <div className="coffee_heading">
                    <h4>Choose Your Coffee</h4>
                    <p>( 30 pods per pack )</p>
                </div>

                <div className="coffee_desc onload">
                    <div className="desc_image">
                        <img src={desc_image_1} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Rich Blend</span>
                                <img src={smallest_image} alt="" />
                            </div>
                            <h5 className='pb-1'>Origin: <span className='desc_span'>Colombia & Sumatra</span></h5>
                            <h5 className='pb-1'>Description:
                                <span className='desc_span'>
                                    A coffee you’ll never want to end. It’s rich, dark chocolate and toffee, topped off with a smooth, creamy, vanilla-like finish.
                                </span>
                            </h5>
                        </div>

                        <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity} />
                            <button onClick={increment} className="plus">+</button>
                        </div>
                    </div>
                </div>

                <div className="coffee_desc">
                    <div className="desc_image">
                        <img src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Smooth Blend</span>
                                <img src={smallest_image} alt="" />
                            </div>
                            <h5 className='pb-1'>Origin: <span className='desc_span'>Indonesia, Brazil, Colombia & India</span></h5>
                            <h5 className='pb-1'>Description:
                                <span className='desc_span'>
                                    It’s just so smooth! A chocolatey, caramelly, almondy delight.
                                </span>
                            </h5>
                        </div>

                        <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_1} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_1} />
                            <button onClick={increment_1} className="plus">+</button>
                        </div>
                    </div>
                </div>

                <div className="coffee_desc">
                    <div className="desc_image">
                        <img src={desc_image_3} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Dark Blend</span>
                                <img src={smallest_image} alt="" />
                            </div>
                            <h5 className='pb-1'>Origin: <span className='desc_span'>Colombia, Brazil & Uganda</span></h5>
                            <h5 className='pb-1'>Description:
                                <span className='desc_span'>
                                    A classic dark roast perfect for long lattes, strong americanos or a shot of espresso that will knock socks off2
                                </span>
                            </h5>
                        </div>

                        <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_2} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_2} />
                            <button onClick={increment_2} className="plus">+</button>
                        </div>
                    </div>
                </div>

                <div className="coffee_desc m-0">
                    <div className="desc_image">
                        <img src={desc_image_4} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Decaf</span>
                                <img src={smallest_image} alt="" />
                            </div>
                            <h5 className='pb-1'>Origin: <span className='desc_span'>Honduras (Sierra Mountains)</span></h5>
                            <h5 className='pb-1'>Description:
                                <span className='desc_span'>
                                    A swiss water decaf designed to taste as good as any caffeinated coffee you can find. If you love coffee but don’t need caffeine then this is the blend for you!
                                </span>
                            </h5>
                        </div>

                        <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_3} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_3} />
                            <button onClick={increment_3} className="plus">+</button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Coffee;