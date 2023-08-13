import React, { useState } from 'react';
import ExerciseRoutine from './ExerciseRoutine';
import Meditation from './Meditation';
import ActivityTracker from './ActivityTracker';
import "../css/Dashboard.css"
function Dashboard() {
  const [activeTab, setActiveTab] = useState('exercise');

  return (
    <div className="dashboard">
      <h1> Wellness Companion App</h1>     
      <div className="tabs">
        <button onClick={() => setActiveTab('exercise')}>Exercise</button>
        <button onClick={() => setActiveTab('meditation')}>Meditation</button>
        <button onClick={() => setActiveTab('activity')}>Activity</button>
      </div>
      
      {activeTab === 'exercise' && <ExerciseRoutine />}
      {activeTab === 'meditation' && <Meditation />}
      {activeTab === 'activity' && <ActivityTracker />}
      
    </div>
  );
}

export default Dashboard;
