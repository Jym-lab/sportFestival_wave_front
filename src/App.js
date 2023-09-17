import './App.css';
import './css/font.css'
import './css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavbarProvider } from './utils/navbar-context';
import FoodTruck from './pages/FoodTruck';

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foodtruck' element={<FoodTruck />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
