import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/sportMenu.css';
import Navbar from './Navbar';
import DecidedMatch from './DecidedMatch';
import MainMatch from './MainMatch';
import ScrollToTop from './ScrollToTop';
import { useNavbar } from '../utils/navbar-context';
import MainMatchRe from './MainMatchRe';

const SportMenu = ({ main }) => {
    const [activeTab, setActiveTab] = useState(0);
    const { isOpen } = useNavbar()

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

    const tabs = ['축구', '농구', '피구', '손족구', '발야구', '족구', '배드민턴', '볼링', '댄스', 'LOL', 'FIFA'];

    console.log(activeTab);
    return (
        <>
            <div className='flex flex-col'>
                <Navbar />
                <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="sport-menu-container NanumSquareEB pt-16 grow-0">
                        <Slider {...settings}>
                            {tabs.map((tab, index) => (
                                <div key={index} className={index === activeTab ? 'tab-item active' : 'tab-item'}>
                                    <button onClick={() => setActiveTab(index)}>{tab}</button>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {activeTab === 0 && <MainMatchRe category={'축구'} teamA={'사복'} teamB={'경영'} />}
                    {activeTab === 1 && <MainMatchRe category={'농구'} teamA={'사복'} teamB={'글물'} />}
                    {activeTab === 2 && <MainMatchRe category={'손족구'} teamA={'유교'} teamB={'연기'} />}
                    {activeTab === 3 && <MainMatchRe category={'발야구'} teamA={'유교'} teamB={'연기'} />}
                    {activeTab === 4 && <MainMatchRe category={'족구'} teamA={'연기'} teamB={'국제'} />}
                    {activeTab === 5 && <MainMatchRe category={'피구'} teamA={'유교'} teamB={'연기'} />}

                    {/* 결승끝난 sport */}
                    <DecidedMatch sport={activeTab} />
                    <ScrollToTop />
                </div>
            </div>
        </>

    );
};

export default SportMenu;
