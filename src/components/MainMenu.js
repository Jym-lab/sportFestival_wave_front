import { useNavigate } from "react-router-dom";
import SingleSlider from "./SingleSlider";
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/sportMenu.css';
import Navbar from './Navbar';
import DecidedMatch from './DecidedMatch';
import MainMatch from './MainMatch';


const MainMenu = () => {
    const Navigate = useNavigate(); const [activeTab, setActiveTab] = useState(0);

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
            <div className="min-h-screen flex flex-col items-center justify-center main-background pt-16">
                <div className="sport-menu-container NanumSquareEB grow-0">
                <Slider {...settings}>
                    {tabs.map((tab, index) => (
                        <div key={index} className={index === activeTab ? 'tab-item active' : 'tab-item'}>
                            <button onClick={() => setActiveTab(index)}>{tab}</button>
                        </div>
                    ))}
                </Slider>
            </div>
                <div className="main-menu-box-1 my-4">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">결승전<br />승부예측<br />경품안내</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                {/*
                <div className="main-menu-box-2 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">2023<br />영암체전<br />굿즈</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                <div className="main-menu-box-3 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">가을밤의<br />시네마</div>
                        <div className="text-4xl ms-6 mt-4">with. <span className="text-red-600">롯데시네마</span></div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div>
                <div className="main-menu-box-4 my-8">
                    <div className="NanumSquareEB">
                        <div className="text-5xl ms-6 mt-8 leading-tight">영암체전<br />응원전</div>
                        <div className="text-2xl ms-6 mt-4">바로 보러가기▶</div>
                    </div>
                </div> */}

                <div className="NanumSquareEB text-black ">
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">학과별 결승전 승부예측 응모</div>
                        <div className="text-sm main-menu-sub-button-1 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/matchprediction') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">푸드트럭 메뉴 한 곳에 모았.zip</div>
                        <div className="text-sm main-menu-sub-button-2 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/foodtruck') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">2023 영암체전 부스 배치도</div>
                        <div className="text-sm main-menu-sub-button-3 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/boothlocation') }}>바로가기</button>
                        </div>
                    </div>
                    <div className="main-menu-button my-3 flex items-center justify-between px-3">
                        <div className="text-lg flex items-center">영암체전 타임테이블</div>
                        <div className="text-sm main-menu-sub-button-4 text-center flex items-center justify-center">
                            <button onClick={() => { Navigate('/timetable') }}>바로가기</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MainMenu;
