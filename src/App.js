import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;