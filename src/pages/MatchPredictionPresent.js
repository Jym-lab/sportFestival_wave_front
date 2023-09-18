import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { images } from "../utils/images";
import { useNavbar } from "../utils/navbar-context";

const MatchPredictionPresent = () => {
    const Navigate = useNavigate();
    const { isOpen } = useNavbar()
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className={`transition duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="pageTitleCenter">
                        <p className="mb-2">학과별 결승전</p>
                        <p>승부예측 경품안내</p>
                    </div>

                    <div className="predictionbtn text-center NanumGothicB">
                        <button onClick={() => { Navigate('/matchprediction') }}>승부예측 참여하러 가기 ▶</button>
                    </div>

                    <div className="text-center p-3 my-8">
                        <div className="playstationbox flex flex-col justify-center items-center w-11/12 mx-auto">
                            <img className='w-8/12 p-3 py-8' src={images.playstation5} alt="플레이스테이션" />
                            <div className="my-3 Danjo">
                                PlayStation 5<br />
                                플레이스테이션 5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MatchPredictionPresent