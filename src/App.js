import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ecole from './components/Ecole';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import DropdownMenu from './components/DropdownMenu';

const events = [
  {
    title: 'Big Meeting',
    start: new Date(2024, 4, 9, 10, 0), // Note: Months are 0-based in JavaScript Dates
    end: new Date(2024, 4, 9, 14, 30),
    allDay: false
  }
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/ecole" element={<Ecole />} />
          <Route path="/calendar" element={<Calendar events={events} />} />  {/* Calendar route */}
          <Route path="/ecole" element={<DropdownMenu  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
