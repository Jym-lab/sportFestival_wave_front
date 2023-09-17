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

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foodtruck' element={<FoodTruck />} />
            <Route path='/boothlocation' element={<BoothLocation />} />
            <Route path='/timetable' element={<TimeTable />} />
            <Route path='/matchprediction' element={<MatchPrediction />} />
            <Route path='/matchpredictionpresent' element={<MatchPredictionPresent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
