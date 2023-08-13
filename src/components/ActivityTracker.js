import React, { useState } from 'react';
import "../css/ActivityTracker.css"
function ActivityTracker() {
  const [stepCount,setStepCount] =useState(0)
  const stepGoal = 1000;
  return (
    <div className="activity-tracker">
      <h2>Activity Tracker</h2>
      <p>Step Count: {stepCount}</p>
      <progress value={stepCount} max={stepGoal}></progress>
      <button onClick={() => setStepCount(stepCount + 100)}>Add 100 Steps</button>
    </div>
  );
}

export default ActivityTracker;
