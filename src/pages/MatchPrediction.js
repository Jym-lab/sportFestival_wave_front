import MatchPredictionElement from '../components/MatchPredictionElement';
import Navbar from '../components/Navbar';
import '../css/Prediction.css';
import ScrollToTop from '../components/ScrollToTop';


const MatchPrediction = () => {
    return (
        <div className='NanumSquareEB'>
            <Navbar />
            <div className="pageTitleLeft">
                <p className="mb-2">학과별 결승전</p>
                <p>승부예측</p>
            </div>

            <MatchPredictionElement titleid={0} />
            <MatchPredictionElement titleid={1} />
            <MatchPredictionElement titleid={2} />
            <MatchPredictionElement titleid={3} />

            <div className="last"></div>
            <ScrollToTop />
        </div >
    )
}

export default MatchPrediction;