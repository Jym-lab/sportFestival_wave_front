import './App.css';
import './css/font.css'
import './css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavbarProvider } from './utils/navbar-context';

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
