import { images } from "../utils/images";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { APIClient } from "../utils/Auth";

const MainMatchRe = ({ category, teamA, teamB, time }) => {
    const [ongoing, setOngoing] = useState(false);
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [result, setResult] = useState(null)
    const [Stime, setSTime] = useState(0);
    const [duration, setDuration] = useState(0);


    const TimerOn = () => {
        const serverTime = new Date(Stime);
        const currentTime = new Date();

        const timeDiffInSeconds = Math.floor((currentTime - serverTime) / 1000);
        setDuration(timeDiffInSeconds);
    }
    setInterval(() => {
        TimerOn()
    }, 1000)
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);

        return `${minutes}:${seconds}`;
    }
    const loading = async () => {
        const response = await APIClient().get(`/game/${category}`);
        return response.data;
    }
    loading()
    .then((res) => {
        setOngoing(res.is_start);
        setScoreA(res.score_A);
        setScoreB(res.score_B)
        if (res.result !== null)
            setResult(res.result)
        else
            setResult("진행중");
        setSTime(res.start_time)
        TimerOn();
    })
    .catch((error) => {
        console.error(error);
    });
    return (
        <div>
            <div className='text-center flex flex-col'>
                <div className={`${ongoing ? 'pulsate-fwd' : ''} NanumGothicEB text-center my-8 text-3xl`}>{category}</div>
                <div className={`${ongoing ? '' : 'notReal'} realTime NanumSquareB`}>
                    {result==="진행중" ? <span className='text-sm'>경기 진행 {formatTime(duration)}초</span> : ''}
                </div>

                <div className='w-10/12 mx-auto flex justify-around items-center text-center'>
                    <div className={result === "진행중" ? '' : result ? 'LoseTeam' : ''}>
                        <div className='team px-5 py-7 mt-6 mx-2'>
                            <div>
                                <img className='w-20' src={images[teamA]} alt="임시" />

                                <p className='NanumGothicB text-black pt-3 flex justify-center items-center'>
                                    {teamA}
                                    {result === "진행중" ? '' : result ? '' : <img src={images.gold} className='winTeam ml-1' alt="메달" />}
                                </p>
                            </div>
                        </div>
                        <div className={`${ongoing ? '' : 'notReal'} real realScore NanumSquareEB text-xl`}>
                            <p>{scoreA}</p>
                        </div>
                    </div>

                    <p className='NanumGothicB text-4xl'>VS</p>

                    <div className={result === "진행중" ? '' : result ? '' : 'LoseTeam'}>
                        <div className='team px-5 py-7 mt-6 mx-2'>
                            <div>
                                <img className='w-20' src={images[teamB]} alt="임시" />
                                <p className='NanumGothicB text-black pt-3 flex justify-center items-center'>
                                {teamB}
                                {result === "진행중" ? '' : result ? <img src={images.gold} className='winTeam ml-1' alt="메달" /> : ''}
                                </p>
                            </div>
                        </div>
                        <div className={`${ongoing ? '' : 'notReal'} real realScore NanumSquareEB text-xl`}>
                            <p>{scoreB}</p>
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
                        일정 : {category === '손족구' || category === '발야구' ? '9월 26일 화' : '9월 25일 월'} {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMatchRe;