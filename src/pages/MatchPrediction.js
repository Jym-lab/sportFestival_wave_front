import MatchPredictionElement from '../components/MatchPredictionElement';
import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';
import { useNavbar } from '../utils/navbar-context';


const MatchPrediction = () => {
    const { isOpen } = useNavbar()
    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="pageTitleLeft">
                    <p className="mb-2">학과별 결승전</p>
                    <p>승부예측</p>
                </div>
                <MatchPredictionElement titleid={'축구'} />
                <MatchPredictionElement titleid={'농구'} />
                <MatchPredictionElement titleid={'피구'} />
                <MatchPredictionElement titleid={'손족구'} />
                <MatchPredictionElement titleid={'발야구'} />
                <MatchPredictionElement titleid={'족구'} />
                <div className="last"></div>
                <ScrollToTop />
            </div >
        </div>
    )
}

export default MatchPrediction;