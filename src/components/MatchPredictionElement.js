import { images } from '../utils/images';
import dummyData from '../json/dummyData.json';
import PredictionChart from './PredictionChart';
import { useState } from 'react';
import { authenticate } from '../utils/Auth';
import { getToken } from '../utils/Auth';

const MatchPredictionElement = ({ titleid }) => {
    const [selectedBtn, setSelectedBtn] = useState(null);

    const handleClickBtn = async (buttonIndex, title) => {
        setSelectedBtn(buttonIndex);

        try {
            const formData = {
                "category": title, "predict": buttonIndex
            }
            const response = await authenticate(getToken()).post(`/user/game`, formData);
            console.log(response);

            if (!response.data) {
                throw new Error(`오류 : ${response.status}`);
            }
            return response.data
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }
    return (
        <div className='my-5'>
            {dummyData
                .filter((item) => item.title === titleid)
                .map((item) => {
                    return (
                        <>
                            <div className='text-center mb-5 text-2xl'>{item.title}</div>
                            <div>
                                <div>
                                    <div className='predictTeam w-10/12 mx-auto flex justify-evenly items-center text-xl'>
                                        <div className='flex justify-evenly'>
                                            <img className='w-8' src={images[item.teamA]} alt="학과로고" />
                                            <span className='ml-3'>{item.teamA}</span>
                                        </div>

                                        <div>VS</div>

                                        <div className='flex justify-evenly'>
                                            <span className='mr-3'>{item.teamB}</span>
                                            <img className='w-8' src={images[item.teamB]} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className='-my-5'>
                                    <PredictionChart sport={item.id} />
                                </div>

                                <div className='letspredict flex justify-around NanumGothicEB mt-2'>
                                    {/* 서버에서 받아온 data : true면~ 수정 필요한 부분*/}
                                    {false ? (
                                        <>
                                            <div><button>응모완료</button></div>
                                            <div><button>응모완료</button></div>
                                        </>) :
                                        (<>
                                            <div><button onClick={() => handleClickBtn(1, item.title)}>응모하기</button></div>
                                            <div><button onClick={() => handleClickBtn(0, item.title)}>응모하기</button></div>
                                        </>)
                                    }
                                </div>
                            </div >
                        </>
                    )
                })
            }
        </div >
    )
}

export default MatchPredictionElement;