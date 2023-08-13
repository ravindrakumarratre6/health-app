import React from 'react';
import ExerciseRoutine from './ExerciseRoutine';

function ParentComponent() {
  return (
    <div>
      {/* Other content */}
      <h1>Welcome to Our Fitness App!</h1>
      <p>Stay active and healthy with our exercise routines.</p>
      
      {/* Include the ExerciseRoutine component */}
      <ExerciseRoutine />
      
      {/* More other content */}
      <footer>&copy; 2023 Fitness App. All rights reserved.</footer>
    </div>
  );
}

export default ParentComponent;
