import './App.css';
import './css/font.css'
import './css/main.css'
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
import MainMatch from './components/MainMatch';

function App() {
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
          </Routes>
        </div>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
