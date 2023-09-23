import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/main.css';
import { useNavigate } from 'react-router-dom';

const SingleSlider = () => {
    const Navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index, url) => {
        setActiveTab(index);
        Navigate(url);
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (currentSlide) => {
            setActiveTab(currentSlide);
        },
    };

    const Info = [
        { "title": '결승전 대진표 보러가기', "url": '/mainmatch' },
        { "title": '결승전 승부예측 경품안내', "url": '/matchpredictionpresent' },
        { "title": '2023 영암체전 굿즈', "url": '/goods' },
        { "title": '가을밤의 시네마', "url": '/cinema' },
        { "title": '영암체전 응원전', "url": '/cheers' },
    ];

    return (
        <div className="sport-menu-container NanumSquareE firstarrow">
            <Slider {...settings}>
                {Info.map((tab, index) => (
                    <div key={index} className={index === activeTab ? 'tab-item active' : 'tab-item'}>
                        <button className='first' onClick={() => { handleClick(index, tab.url) }}>
                            <div className={`Backcolor_${index} sliderMenu w-80 h-64 NanumSquareEB text-4xl my-3`}>
                                <div className='text-start pl-8 pt-10 w-8/12 break-keep'>
                                    {tab.title}<br />
                                </div>
                                {/* {tab.title[0] === '가' ?
                                    (
                                        <>
                                            <div className='text-2xl overflow-x-visible text-start pl-8 pt-1'>
                                                with. <span className='red'>롯데시네마</span>
                                            </div>
                                        </>
                                    )
                                    : ''} */}
                                <div className='pt-6 text-2xl text-start pl-8'>바로 보러가기 ▶</div>
                            </div>
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SingleSlider;