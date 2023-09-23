import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { useNavbar } from "../utils/navbar-context";
import '../css/style.css';
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cheers = () => {
    const { isOpen } = useNavbar();
    const [showCheersong, setShowCheersong] = useState(true);
    const [showCheeringslogan, setShowCheeringslogan] = useState(false);

    const handleCheersongButtonClick = () => {
        setShowCheersong(false);
        setShowCheeringslogan(true);
        // 애니메이션 시간(0.5초) 이후에 Cheeringslogan 컴포넌트 표시
    };

    const handleCheeringsloganButtonClick = () => {
        setShowCheeringslogan(false);
        setShowCheersong(true); // 애니메이션 시간(0.5초) 이후에 Cheersong 컴포넌트 표시
    };

    return (
        <div>
            <div className="Cheers main-background min-h-screen">
                <Navbar />
                <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                    {showCheersong && (
                        <div className={`${!showCheeringslogan ? 'display-block  fade-in-right' : 'display-none'}`}>
                            <div className="flex flex-row justify-center items-center">
                                <div className="w-3/12"></div>
                                <div className="pageTitleCenter">
                                    <p className="mb-2 pt-8">성결대학교</p>
                                    <p>응원가</p>
                                </div>
                                <div className="w-3/12 pt-20 px-6 text-5xl cursor-pointer" onClick={handleCheersongButtonClick}>
                                    <RiArrowRightSLine />
                                </div>
                            </div>
                            <div className="text-center text-xs NanumSquareR pb-8 leading-5">
                                응원가는 인스타그램 <Link to='https://www.instagram.com/sku_39th_renew/' target="_blank" className="underline underline-offset-4">@sku_39th_renew</Link> 또는<br />
                                유튜브 <Link to='https://www.youtube.com/watch?v=RhVnujW2KVo' target="_blank" className="underline underline-offset-4">'성결대학교 총학생회'</Link>채널에서<br />
                                감상하실 수 있습니다.
                            </div>
                            <div className="text-center text-xs NanumSquareR pb-8 leading-5">
                                던져 내 몸을 이 심장으로<br />
                                저기 높은 하늘을 보며<br />
                                신발끈을 동여매 검정에서<br />
                                밝은 빛을 따라가보면<br />
                                내 맘은 저 높이 태양에 솟지<br />
                                매일 하루 항해하는 나를 보며<br />
                                이 세상을 걷지 더 위로 돌진<br />
                                우리의 다음을 더욱 바라보며<br />
                                <br />
                                정신 없이 던지었던 날도<br />
                                거침 없이 발을 디뎌 날아올라<br />
                                함성 속 yes I can fly<br />
                                돌진하여 추월해 저 구름까지도<br />
                                여전히 타올라<br />
                                burning heart<br />
                                (burning heart)<br />
                                burning heart<br />
                                (던져봐 나의 몸)<br />
                                <br />
                                그 시간 속 우리 시간들이<br />
                                지금 빛을 내고 있어<br />
                                추억들이 우리를 동여매줘<br />
                                이제 우린 함께인 거야<br />
                                너와 난 더 높이 하늘을 날지<br />
                                매일 같이 항해했던 우릴 보며<br />
                                이 세상을 다시 또 한번 돌진<br />
                                우리의 내일을 위해 새롭게<br />
                                <br />
                                정신없이 던지었던 날도<br />
                                거침없이 발을 디뎌 날아올라<br />
                                <br />
                                함성 속 yes I can fly<br />
                                돌진하여 추월해 저 구름까지도<br />
                                여전히 타올라<br />
                                burning heart<br />
                                (burning heart)<br />
                                burning heart<br />
                                (던져봐 나의 몸)
                            </div>
                        </div>
                    )}

                    {showCheeringslogan && (
                        <div className={`slide-right ${!showCheersong ? 'display-block  fade-in-left' : 'display-none'}`}>
                            <div className="flex flex-row justify-center items-center">
                                <div className="w-3/12 pt-20 px-6 text-5xl cursor-pointer" onClick={handleCheeringsloganButtonClick}>
                                    <RiArrowLeftSLine />
                                </div>
                                <div className="pageTitleCenter">
                                    <p className="mb-2 pt-8">단과대학별</p>
                                    <p>응원구호</p>
                                </div>
                                <div className="w-3/12"></div>
                            </div>
                            <div className="text-center text-xs NanumSquareR pb-8">각 단과대학별 응원구호가 상이하니 참고 부탁드립니다.</div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">글로벌경영기술대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">siuuu!!!</div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">사범대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">유교 어이! 체교 어이! 사범 어이!</div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">사회과학대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">사과대 자 두과자</div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">신학대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">shema, Vamos</div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">예술대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">예대우승 ! 진행시켜 ! 영~차 !</div>
                            </div>
                            <div className="flex flex-col justify-center items-center py-5">
                                <div className="text-center text-sm NanumSquareEB pb-3">IT공과대학</div>
                                <hr className="w-48 text-center" />
                                <div className="text-center text-sm NanumSquareB pt-3">우리가 누구? 최강공대</div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
};

export default Cheers;
