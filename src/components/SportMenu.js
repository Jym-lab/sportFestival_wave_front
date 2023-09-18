import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/sportMenu.css';
import Navbar from './Navbar';
import DecidedMatch from './DecidedMatch';
import MainMatch from './MainMatch';

const SportMenu = () => {
    const [activeTab, setActiveTab] = useState(0);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        afterChange: (currentSlide) => {
            setActiveTab(currentSlide);
        },
    };

    const tabs = ['축구', '농구', '손족구', '발야구', '족구', '피구', '배드민턴', '볼링', '댄스', 'LOL', 'FIFA'];

    return (
        <>
            <div className='flex flex-col h-screen'>
                <Navbar />
                <div className="sport-menu-container NanumSquareEB pt-16 grow-0">
                    <Slider {...settings}>
                        {tabs.map((tab, index) => (
                            <div key={index} className={index === activeTab ? 'tab-item active' : 'tab-item'}>
                                <button onClick={() => setActiveTab(index)}>{tab}</button>
                            </div>
                        ))}
                    </Slider>
                </div>

                <MainMatch sport={activeTab} />

                {/* 결승끝난 sport */}
                <DecidedMatch sport={activeTab} />
            </div>
        </>

    );
};

export default SportMenu;
