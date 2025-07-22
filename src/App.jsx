import './css/App.css'

import {Routes, Route} from "react-router-dom";

import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';

import NavBar from './components/NavBar';


function App() {

  const movieNumber = 1;

  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </>

  )
}

export default App
