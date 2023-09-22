import MatchPredictionElement from '../components/MatchPredictionElement';
import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';
import { useNavbar } from '../utils/navbar-context';
import LoginBtn, { getToken } from '../utils/Auth';


const MatchPrediction = () => {
    const { isOpen } = useNavbar()
    const ACCESS_TOKEN = getToken();
    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleCenter">
                    <p className="mb-2 pt-8">학과별 결승전</p>
                    <p>승부예측</p>
                </div>
                {ACCESS_TOKEN ?
                <>
                    <MatchPredictionElement titleid={'축구'} />
                    <MatchPredictionElement titleid={'농구'} />
                    <MatchPredictionElement titleid={'피구'} />
                    <MatchPredictionElement titleid={'손족구'} />
                    <MatchPredictionElement titleid={'발야구'} />
                    <MatchPredictionElement titleid={'족구'} />
                </> :
                <div className={`flex flex-col justify-center items-center`}>
                    <div className='text-lg text-center pt-10'>
                        <p>본 서비스는 로그인 후 이용가능한 서비스입니다.</p>
                    </div>
                    <div className='NanumSquareB text-base text-center my-12'>
                        <p>성결대학교 구글 계정으로 로그인이 가능합니다.</p>
                        <p className='pt-2'>하단 버튼을 누르고 로그인을 진행해 주세요.</p>
                    </div>
                    <LoginBtn/>
                </div>
                }
                <div className="last"></div>
                <ScrollToTop />
            </div >
        </div>
    )
}

export default MatchPrediction;