import './css/App.css'

import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import LoginRegister from './pages/loginRegister.jsx';
import { MovieProvider } from "./contexts/MovieContext.jsx";
import NavBar from './components/NavBar';


function App() {

  const location = useLocation();
  const hiddenNavRoutes = ['/login-register'];

  return (
    <>
      <MovieProvider>
        <div>
          {!hiddenNavRoutes.includes(location.pathname) && <NavBar />}
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login-register" element={<LoginRegister />} />
          </Routes>
        </main>
      </MovieProvider>
    </>

  )
}

export default App
