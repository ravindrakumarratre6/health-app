import React, { useState, useEffect } from 'react';
import "../css/ExerciseRoutines.css"

function ExerciseRoutines() {
  const [routine, setRoutine] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedRoutine = localStorage.getItem('exerciseRoutine');
    if (savedRoutine) {
      setRoutine(savedRoutine);
    }
  }, []);

  const handleInputChange = (e) => {
    setRoutine(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    localStorage.setItem('exerciseRoutine', routine);
  };

  return (
    <div className='exercise-routines'>
      <h2>Exercise Routine Setup</h2>
      <label>Exercise Routine:</label>
      <input type="text" value={routine} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Save</button>

      {submitted && (
        <div>
          <h3>Routine Saved</h3>
          <p>Exercise Routine: {routine}</p>
        </div>
      )}

      {localStorage.getItem('exerciseRoutine') && !submitted && (
        <div>
          <h3>Saved Routine</h3>
          <p>Exercise Routine: {localStorage.getItem('exerciseRoutine')}</p>
        </div>
      )}
    </div>
  );
}

export default ExerciseRoutines;
