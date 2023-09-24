import { useEffect, useState } from "react";
import { authenticate } from '../utils/Auth';
import { getToken } from '../utils/Auth';
import { VscDebugStart } from "react-icons/vsc";

const AdminEachgame = ({ category, teamA, teamB }) => {
    const [scores, setScores] = useState({ scoreA: '0', scoreB: '0' });
    const [winnerTeam, setWinnerTeam] = useState(null);

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    const handleScoreChange = (e) => {
        const { name, value } = e.target;
        setScores((prevScores) => ({
            ...prevScores,
            [name]: value,
        }));
    }

    const handleWinnerTeamChange = (e) => {
        const value = e.target.value;
        const winner = value === "" ? null : value === "true";
        setWinnerTeam(winner);
    }

    // 경기 시작
    const convertCategoryToEnglish = (category) => {
        switch (category) {
            case '축구':
                return 'soccer';
            case '농구':
                return 'basketball';
            case '손족구':
                return 'handball';
            case '발야구':
                return 'kickbaseball';
            case '족구':
                return 'football';
            case '피구':
                return 'dodgeball';
            default:
                return category; // 다른 경우에는 그대로 반환
        }
    };
    // TeamA or TeamB 점수입력 후 확인 누르면
    const handleScoreSubmit = async (e) => {
        const adminConfirmed = window.confirm(`점수를 입력하시겠습니까?`);

        if (adminConfirmed) {
            try {
                const formData = {
                    "score_A": scores.scoreA,
                    "score_B": scores.scoreB,
                    "result": null // 진행중
                }
                const englishCategory = convertCategoryToEnglish(category);
                const response = await authenticate(getToken()).post(`/game/${englishCategory}`, formData);

                if (!response.data) {
                    throw new Error(`오류 : ${response.status}`);
                }
            } catch (error) {
                console.error('오류 발생:', error);
                localStorage.removeItem('token');
                window.location.reload();
            }
        }
        // setScores({ scoreA: '', scoreB: '' });
    }

    const handleWinTeamSubmit = async () => {
        const adminWinConfirmed = window.confirm(`승리팀 입력을 확정하시겠습니까? 확인을 누를 시 경기가 종료됩니다.`);

        if (adminWinConfirmed) {
            try {
                const formData = {
                    "score_A": scores.scoreA,
                    "score_B": scores.scoreB,
                    "result": winnerTeam // teamA - true / teamB - false
                }
                const englishCategory = convertCategoryToEnglish(category);
                const response = await authenticate(getToken()).post(`/game/${englishCategory}`, formData);
                if (!response.data) {
                    throw new Error(`오류 : ${response.status}`);
                }
            } catch (error) {
                console.error('오류 발생:', error);
                localStorage.removeItem('token');
                window.location.reload();
            }
        }
    }



    const handleStartState = async () => {
        const adminConfirmed = window.confirm(`${category}를 시작할까요?`);

        if (adminConfirmed) {
            const formattedDateTime = formatDate(currentDateTime); // 시간 형식

            try {
                const englishCategory = convertCategoryToEnglish(category);
                const formData = {
                    category: englishCategory,
                    time: formattedDateTime
                }
                const response = await authenticate(getToken()).post(`game/start/${englishCategory}`, formData);

                if (!response.data) {
                    throw new Error(`오류 : ${response.status}`);
                }
            } catch (error) {
                console.error('오류 발생:', error);
                localStorage.removeItem('token');
                window.location.reload();
            }
        }
    }

    useEffect(() => {
        // 1초마다 현재 날짜와 시간 업데이트
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    });

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className="NanumSquareEB text-center mt-10 text-white" >
            <div className="flex justify-center items-center">
                <div className="text-4xl mr-5">{category}</div>
                <VscDebugStart size={30} onClick={handleStartState} />
            </div>
            <div>
                <div className="flex justify-evenly text-2xl mt-5">
                    <div>
                        <div className="mb-2">{teamA}</div>
                        <p className="text-lg">점수입력</p>
                        <input type="text" className="inputScore" name="scoreA" value={scores.scoreA} onChange={handleScoreChange} />
                    </div>

                    <div>
                        <div className="mb-2">{teamB}</div>
                        <p className="text-lg">점수입력</p>
                        <input type="text" className="inputScore" name="scoreB" value={scores.scoreB} onChange={handleScoreChange} />
                    </div>
                </div>
                <div className="text-xl mt-3 adminScoreSubmitBtn"><button onClick={handleScoreSubmit}>확인</button></div>
            </div>

            <hr className="my-5" />

            <div className="text-3xl">승리팀 입력</div>
            <div className="flex justify-evenly items-center mt-3 text-xl">
                <label>
                    <input
                        type="radio"
                        name="SelectWinnerTeam"
                        value="false"
                        onChange={handleWinnerTeamChange}
                    />
                    {teamA}
                </label>
                <label>
                    <input
                        type="radio"
                        name="SelectWinnerTeam"
                        value="true"
                        onChange={handleWinnerTeamChange}
                    />
                    {teamB}
                </label>

                <div className="adminScoreSubmitBtn">
                    <button onClick={handleWinTeamSubmit}>확인</button>
                </div>
            </div>
        </div >
    )
}

export default AdminEachgame;
