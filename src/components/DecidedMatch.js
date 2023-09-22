import { images } from "../utils/images";
import decidedMatch from '../json/decidedMatch.json';
import { Link } from "react-router-dom";

const DecidedMatch = ({ sport }) => {
    return (
        <>
            {decidedMatch
                .filter((item) => item.id === sport)
                .map((item) => {
                    return (
                        <>
                            <div className="flex flex-col h-max justify-center">
                                <div className="NanumGothicEB text-center my-8 text-3xl">{item.title}</div>

                                <div className="DecidedMatch">
                                    <div className="flex justify-center items-center mb-10 mx-auto">
                                        <img className='w-2/12' src={images.gold} alt="금메달" />
                                        <div className="ml-7 w-32  shrink">
                                            <p className="mb-2 NanumGothicEB text-2xl">{item.gold}</p>
                                            <span className="NanumGothicL text-sm">{item.goldcontent}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center mb-10 mx-auto">
                                        <img className='w-2/12' src={images.sliver} alt="금메달" />
                                        <div className="ml-7 w-32 shrink">
                                            <p className="mb-2 NanumGothicEB text-2xl">{item.sliver}</p>
                                            <span className="NanumGothicL text-sm">{item.slivercontent}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center mb-10 mx-auto">
                                        <img className='w-2/12' src={images.bronze} alt="금메달" />
                                        <div className="ml-7 w-32 shrink">
                                            <p className="mb-2 NanumGothicEB text-2xl">{item.bronze}</p>
                                            <span className="NanumGothicL text-sm">{item.bronzecontent}</span>
                                        </div>
                                    </div>
                                </div>

                                <hr className="mx-5" />

                                <div className="text-center mt-8 NanumGothicB">
                                    하단 버튼을 클릭하면<br />영상 시청이 가능합니다.
                                </div>
                                <div className="URLBtn NanumGothicB">
                                    {item.id === 9 || item.id === 10 ?
                                        <>
                                            <div>
                                                <button><Link to={`${item.final}`}>결승전 보러가기</Link></button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <button><Link to={`${item.thirdRound}`}>3,4위전 보러가기</Link></button>
                                            </div>
                                            <div>
                                                <button><Link to={`${item.semifinals}`}>4강 보러가기</Link></button>
                                            </div>
                                            <div>
                                                <button><Link to={`${item.final}`}>결승전 보러가기</Link></button>
                                            </div>
                                        </>}

                                </div >
                            </div >
                        </>
                    )
                })}

        </>
    )
}

export default DecidedMatch;