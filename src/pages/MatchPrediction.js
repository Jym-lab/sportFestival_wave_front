import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';
import { useNavbar } from '../utils/navbar-context';
import LoginBtn, { getToken } from '../utils/Auth';
import MatchPredictionElementRe from '../components/MatchPredictionElementRe'
import { useEffect, useState } from 'react';


const MatchPrediction = () => {
    const { isOpen } = useNavbar()
    const ACCESS_TOKEN = getToken();

    const [t_basketball, setT_basketball] = useState(false);
    const [t_football, setT_football] = useState(false);
    const [t_dodgeball, setT_dodgeball] = useState(false);
    const [t_soccer, setT_soccer] = useState(false);
    const [t_handball, setT_handball] = useState(false);
    const [t_kickbaseball, setT_kickbaseball] = useState(false);

    const TimeOut_basketball = new Date(2023, 8, 24, 10, 49, 59);
    const TimeOut_football = new Date(2023, 8, 25, 16, 19, 59);
    const TimeOut_dodgeball = new Date(2023, 8, 25, 12, 49, 59);
    const TimeOut_soccer = new Date(2023, 8, 25, 13, 29, 59);
    const TimeOut_handball = new Date(2023, 8, 26, 9, 49, 59);
    const TimeOut_kickbaseball = new Date(2023, 8, 26, 10, 39, 59);

    const TimeOutPredict = () => {
        const currentTime = new Date();

        if (currentTime - TimeOut_basketball > 0) {
            setT_basketball(true);
        }
        if (currentTime - TimeOut_football > 0) {
            setT_football(true);
        }
        if (currentTime - TimeOut_dodgeball > 0) {
            setT_dodgeball(true);
        }
        if (currentTime - TimeOut_soccer > 0) {
            setT_soccer(true);
        }
        if (currentTime - TimeOut_handball > 0) {
            setT_handball(true);
        }
        if (currentTime - TimeOut_kickbaseball > 0) {
            setT_kickbaseball(true);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => TimeOutPredict(), 1000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleCenter">
                    <p className="mb-2 pt-8 tracking-in-contract">결승전</p>
                    <p className='tracking-in-contract'>승부예측</p>
                </div>
                {ACCESS_TOKEN ?
                    <>
                        <div className={`flex flex-col justify-center items-center`}>
                            <div className='text-sm text-center'>
                                <p className='mb-1'>추후 개별 문자로 당첨 결과가 전송될 예정입니다.</p>
                                <p className='text-xs NanumSquareB text-red-500'>응모하기는 해당 경기 10분 전 마감됩니다.</p>
                                <p className='text-xs NanumSquareL'>확인 버튼을 누르시면 수정 혹은 재참여가 불가합니다.</p>
                            </div>
                        </div>
                        <MatchPredictionElementRe title={'농구'} teamA={'사복'} teamB={'글물'} TimeOut={t_basketball} />
                        <MatchPredictionElementRe title={'피구'} teamA={'유교'} teamB={'연기'} TimeOut={t_dodgeball} />
                        <MatchPredictionElementRe title={'축구'} teamA={'사복'} teamB={'경영'} TimeOut={t_soccer} />
                        <MatchPredictionElementRe title={'족구'} teamA={'연기'} teamB={'국제'} TimeOut={t_football} />
                        <MatchPredictionElementRe title={'손족구'} teamA={'유교'} teamB={'연기'} TimeOut={t_handball} />
                        <MatchPredictionElementRe title={'발야구'} teamA={'유교'} teamB={'연기'} TimeOut={t_kickbaseball} />
                    </> :
                    <div className={`flex flex-col justify-center items-center`}>
                        <div className='text-lg text-center pt-10'>
                            <p>본 서비스는 로그인 후 이용가능한 서비스입니다.</p>
                        </div>
                        <div className='NanumSquareB text-base text-center my-12'>
                            <p>성결대학교 구글 계정으로 로그인이 가능합니다.</p>
                            <p className='pt-2'>하단 버튼을 누르고 로그인을 진행해 주세요.</p>
                        </div>
                        <LoginBtn />
                    </div>
                }
                <div className="last"></div>
                <ScrollToTop />
            </div >
        </div>
    )
}

export default MatchPrediction;