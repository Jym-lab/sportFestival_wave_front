import { images } from '../utils/images';
import dummyData from '../json/dummyData.json';

const MatchPredictionElement = ({ titleid }) => {
    return (
        <div>
            {dummyData
                .filter((item) => item.id === titleid)
                .map((item) => {
                    return (
                        <>
                            <div className='text-center mb-5 text-2xl'>{item.title}</div>
                            <div>
                                <div>
                                    <div className='predictTeam w-10/12 mx-auto flex justify-center items-center text-xl'>
                                        <div className='flex justify-evenly'>
                                            <img className='w-3/12' src={images.img} alt="" />
                                            <span>{item.teamA}</span>
                                        </div>

                                        <div>VS</div>

                                        <div className='flex justify-evenly'>
                                            <span>{item.teamB}</span>
                                            <img className='w-3/12' src={images.img} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div>chart</div>

                                <div className='letspredict flex justify-around NanumGothicEB'>
                                    <div><button>응모하기</button></div>
                                    <div><button>응모하기</button></div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default MatchPredictionElement