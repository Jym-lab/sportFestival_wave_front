import '../css/admin.css';
import AdminEachgame from './AdminEachgame';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const AdminSelectGame = () => {
    const [game, setGame] = useState('');
    const handleEachGame = (e) => {
        setGame(e.target.innerHTML);
    }

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="NanumGothicEB text-3xl text-center pb-5 pt-20">경기선택</div>

            <div className="flex text-lg items-center justify-center flex-wrap">
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>피구</button></div>
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>축구</button></div>
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>발야구</button></div>
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>족구</button></div>
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>손족구</button></div>
                <div className="gameBtn NanumGothicB"><button onClick={(e) => { handleEachGame(e) }}>농구</button></div>
            </div>

            {game === '축구' && <AdminEachgame category={'축구'} teamA={'사복'} teamB={'경영'} />}
            {game === '농구' && <AdminEachgame category={'농구'} teamA={'사복'} teamB={'글물'} />}
            {game === '손족구' && <AdminEachgame category={'손족구'} teamA={'유교'} teamB={'연기'} />}
            {game === '발야구' && <AdminEachgame category={'발야구'} teamA={'유교'} teamB={'연기'} />}
            {game === '족구' && <AdminEachgame category={'족구'} teamA={'연기'} teamB={'국제'} />}
            {game === '피구' && <AdminEachgame category={'피구'} teamA={'유교'} teamB={'연기'} />}
        </div >
    )
}

export default AdminSelectGame;