import { images } from '../utils/images';
import dummyData from '../json/dummyData.json';
import PredictionChart from './PredictionChart';
import { useState } from 'react';

const MatchPredictionElement = ({ titleid }) => {
    const [selectedBtn, setSelectedBtn] = useState(null);

    const handleClickBtn = async (buttonIndex, title) => {
        setSelectedBtn(buttonIndex);

        try {
            const response = await fetch('/apiUrl ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    category: title, prediction: selectedBtn
                }),
            });

            if (!response.ok) {
                throw new Error(`오류 : ${response.status}`);
            }

            const data = await response.json();
            console.log('서버 응답:', data);
        } catch (error) {
            console.error('오류 발생:', error);
        }
    }
    return (
        <div className='my-5'>
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

                                <div className='-my-5'>
                                    <PredictionChart sport={item.id} />
                                </div>

                                <div className='letspredict flex justify-around NanumGothicEB mt-2'>
                                    <div><button onClick={() => handleClickBtn(1, item.title)}>응모하기</button></div>
                                    <div><button onClick={() => handleClickBtn(0, item.title)}>응모하기</button></div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default MatchPredictionElement;