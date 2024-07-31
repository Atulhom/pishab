import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header.jsx';
import Search from './pages/Search.jsx';
import LatestRooms from './pages/LatestRooms.jsx';
import Citycardold from './pages/Citycardold.jsx';
import Questions from './pages/Questions.jsx';
import TopRooms from './pages/TopRooms.jsx';
import Footer from './pages/Footer.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/latest-rooms" element={<LatestRooms />} />
          <Route path="/top-rooms" element={<TopRooms />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/citycard" element={<Citycardold />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
