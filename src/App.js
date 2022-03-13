import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Components
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
//Pages
import Home from './components/Pages/Home';
import Joke from './components/Pages/Joke';
import Profile from './components/Pages/Profile';
import Random from './components/Pages/Random';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HeroImage />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/:jokeId' element={<Joke />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
