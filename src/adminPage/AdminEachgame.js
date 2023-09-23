import { useState } from "react";
import { authenticate } from '../utils/Auth';
import { getToken } from '../utils/Auth';

const AdminEachgame = ({ category, teamA, teamB }) => {
    const [scores, setScores] = useState({ scoreA: '', scoreB: '' });
    const [winnerTeam, setWinnerTeam] = useState(null);

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
                const response = await authenticate(getToken()).post(`/game/${category}`, formData);

                if (!response.data) {
                    throw new Error(`오류 : ${response.status}`);
                }
                console.log(response.config.data);
            } catch (error) {
                console.error('오류 발생:', error);
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
                const response = await authenticate(getToken()).post(`/game/${category}`, formData);
                console.log(response.config.data);
                if (!response.data) {
                    throw new Error(`오류 : ${response.status}`);
                }
            } catch (error) {
                console.error('오류 발생:', error);
            }
        }
    }

    return (
        <div className="NanumSquareEB text-center mt-10 text-white" >
            <div className="text-4xl">{category}</div>
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
                        value="true"
                        onChange={handleWinnerTeamChange}
                    />
                    {teamA}
                </label>
                <label>
                    <input
                        type="radio"
                        name="SelectWinnerTeam"
                        value="false"
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