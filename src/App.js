import './App.css';
import './css/font.css'
import './css/main.css'
import './css/about.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavbarProvider } from './utils/navbar-context';
import FoodTruck from './pages/FoodTruck';
import BoothLocation from './pages/BoothLocation';
import TimeTable from './pages/TimeTable';
import MatchPredictionPresent from './pages/MatchPredictionPresent';
import MatchPrediction from './pages/MatchPrediction';
import SportMenu from './components/SportMenu';
import Goods from './pages/Goods';
import Cinema from './pages/Cinema';
import About from './pages/About';
import { Callback } from './utils/Auth';
import Cheers from './pages/Cheers';
import MyPage from './pages/MyPage';
import AdminSelectGame from './adminPage/AdminSelectGame';
import AdminEachgame from './adminPage/AdminEachgame';
import { useEffect } from 'react';
import { getCookie, setCookie } from './utils/cookie';
import axios from 'axios';

function App() {
  useEffect(() => {
    const cookie = getCookie('visitor');
    if (!cookie) {
      const currentDate = new Date();
      const expiresDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1, // 다음 날로 설정
        0, // 시간을 00시로 설정
        0, // 분을 00분으로 설정
        0, // 초를 00초로 설정
      );
      // 시차 보정
      setCookie('visitor', 'visitor', { path: './', expires: expiresDate, secure: true });
      callAPI();
    }
  }, []);

  const callAPI = () => {
    axios.get('https://api.sku-sku.com/visitors/festivalcounts/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      })
  }

  return (
    <NavbarProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/foodtruck' element={<FoodTruck />} />
            <Route path='/boothlocation' element={<BoothLocation />} />
            <Route path='/timetable' element={<TimeTable />} />
            <Route path='/matchprediction' element={<MatchPrediction />} />
            <Route path='/matchpredictionpresent' element={<MatchPredictionPresent />} />
            <Route path='/sportmenu' element={<SportMenu />} />
            <Route path='/goods' element={<Goods />} />
            <Route path='/mainmatch' element={<SportMenu />} />
            <Route path='/cinema' element={<Cinema />} />
            <Route path='/login/callback' element={<Callback />} />
            <Route path='/cheers' element={<Cheers />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/admin' element={<AdminSelectGame />} />
            <Route path='/admineachgame' element={<AdminEachgame />} />
          </Routes>

        </div>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
