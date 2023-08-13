import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Dashboard from './components/Dashboard'; // Your existing Dashboard component
import UserProfile from './components/UserProfile'; // Your existing UserProfile component
import ExerciseRoutines from './components/ExerciseRoutines'; // Your existing ExerciseRoutines component
import About from './components/About'; // The About component
import Contact from './components/Contact'; // The Contact component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> {/* Display the navigation bar */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/exercise-routines" element={<ExerciseRoutines />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
