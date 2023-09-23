import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';
import { useNavbar } from '../utils/navbar-context';
import LoginBtn, { getToken } from '../utils/Auth';
import MatchPredictionElementRe from '../components/MatchPredictionElementRe'


const MatchPrediction = () => {
    const { isOpen } = useNavbar()
    const ACCESS_TOKEN = getToken();
    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleCenter">
                    <p className="mb-2 pt-8">결승전</p>
                    <p>승부예측</p>
                </div>
                {ACCESS_TOKEN ?
                    <>
                        <MatchPredictionElementRe title={'축구'} teamA={'사복'} teamB={'경영'} />
                        <MatchPredictionElementRe title={'농구'} teamA={'사복'} teamB={'글물'} />
                        <MatchPredictionElementRe title={'피구'} teamA={'유교'} teamB={'연기'} />
                        <MatchPredictionElementRe title={'손족구'} teamA={'유교'} teamB={'연기'} />
                        <MatchPredictionElementRe title={'발야구'} teamA={'유교'} teamB={'연기'} />
                        <MatchPredictionElementRe title={'족구'} teamA={'연기'} teamB={'국제'} />
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