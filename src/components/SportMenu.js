import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/sportMenu.css';
import Soccer from './sport/Soccer';
import Basketball from './sport/Basketball';
import HandFootVolleyball from './sport/HandFootVolleyball';
import FootVolleyball from './sport/FootVolleyball';
import Kickball from './sport/Kickball';
import Dodgeball from './sport/Dodgeball';
import Dance from './sport/Dance';
import Navbar from './Navbar';
import DecidedMatch from './DecidedMatch';

const SportMenu = () => {
    const [activeTab, setActiveTab] = useState(0);
    let Content;

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

    switch (activeTab) {
        case 0: // 축구
            Content = Soccer;
            break;
        case 1: // 농구
            Content = Basketball;
            break;
        case 2: // 손족구
            Content = HandFootVolleyball;
            break;
        case 3: // 발야구
            Content = Kickball;
            break;
        case 4: // 족구
            Content = FootVolleyball;
            break;
        case 5: // 피구
            Content = Dodgeball;
            break;
        case 8: // 댄스
            Content = Dance;
            break;
        default:
            Content = () => null;
            break;
    }

    console.log(activeTab);

    return (
        <>
            <div>
                <Navbar />
                <div className="sport-menu-container NanumSquareEB pt-16">
                    <Slider {...settings}>
                        {tabs.map((tab, index) => (
                            <div key={index} className={index === activeTab ? 'tab-item active' : 'tab-item'}>
                                <button onClick={() => setActiveTab(index)}>{tab}</button>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* 결승끝난 sport */}
                <Content />
                <DecidedMatch sport={activeTab} />
            </div>
        </>

    );
};

export default SportMenu;
