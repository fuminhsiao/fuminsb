import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Resorts from './components/Resorts';
import Courses from './components/Courses';
import TicketCalculator from './components/TicketsCalculator';
import FindCoach from './components/FindCoach';
import CoachDetail from './components/CoachDetail';
import FormPage from './components/FormPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/calculator" element={<TicketCalculator />} />
        <Route path="/findcoach" element={<FindCoach />} />
        <Route path="/coach/:id" element={<CoachDetail />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;