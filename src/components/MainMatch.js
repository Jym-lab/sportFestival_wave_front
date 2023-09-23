import dummyData from '../json/dummyData.json';
import { images } from '../utils/images';
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import '../css/mainmatch.css';

const MainMatch = ({ sport }) => {
    return (
        <div>
            {dummyData
                .filter((item) => item.id === sport)
                .map((item) => {
                    return (
                        <div className='text-center flex flex-col'>
                            <div className={`${item.ongoing ? 'pulsate-fwd' : ''} NanumGothicEB text-center my-8 text-3xl`}>{item.title}</div>
                            <div className={`${item.ongoing ? '' : 'notReal'} realTime NanumSquareB`}>
                                <span className='text-sm'>경기 진행 00:00분</span>
                            </div>

                            <div className='w-10/12 mx-auto flex justify-around items-center text-center'>
                                <div>
                                    <div className='team px-5 py-7 mt-6 mx-2'>
                                        <div>
                                            <img className='w-20' src={images[item.teamA]} alt="임시" />
                                            <p className='NanumGothicB text-black pt-3'>{item.teamA}</p>
                                        </div>
                                    </div>
                                    <div className={`${item.ongoing ? '' : 'notReal'} real realScore NanumSquareEB text-xl`}>
                                        <p>2</p>
                                    </div>
                                </div>

                                <p className='NanumGothicB text-4xl'>VS</p>

                                <div>
                                    <div className='team px-5 py-7 mt-6 mx-2'>
                                        <div>
                                            <img className='w-20' src={images[item.teamB]} alt="임시" />
                                            <p className='NanumGothicB text-black pt-3'>{item.teamB}</p>
                                        </div>
                                    </div>
                                    <div className={`${item.ongoing ? '' : 'notReal'} real realScore NanumSquareEB text-xl`}>
                                        <p>2</p>
                                    </div>
                                </div>

                            </div>

                            <p className='NanumSquareL text-xs pt-10'>경기 스코어는 실시간으로 반영됩니다.</p>

                            <div className='py-8 NanumGothicB text-lg w-8/12 mx-auto'>
                                <div className='flex items-center justify-evenly'>
                                    <IoLocationSharp className='mr-1' />
                                    위치 : 성결대학교 운동장
                                </div>
                                <div className='flex items-center justify-evenly'>
                                    <AiOutlineCalendar className='mr-1' />
                                    일정 : 9월 25일 월
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div >
    )
}

export default MainMatch;