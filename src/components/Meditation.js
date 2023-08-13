import React, { useState } from 'react';

function Meditation() {
  const [currentStep, setCurrentStep] = useState(0);
  const meditationSteps = [
    "Find a quiet and comfortable place to sit or lie down.",
    "Close your eyes and take a few deep breaths to relax.",
    "Focus your attention on your breath. Inhale deeply and exhale slowly.",
    "Visualize a calm and peaceful place, such as a beach or a forest.",
    "Let go of any tension in your body, starting from your head down to your toes.",
    "Stay in this relaxed state for a few minutes, enjoying the tranquility.",
    "Slowly bring your awareness back to the present and gently open your eyes.",
  ];

  const handleNextStep = () => {
    if (currentStep < meditationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="meditation">
      <h2>Meditation and Relaxation</h2>
      <div className="meditation-content">
        <p>{meditationSteps[currentStep]}</p>
        <div className="meditation-navigation">
          <button onClick={handlePreviousStep} disabled={currentStep === 0}>
            Previous
          </button>
          <button onClick={handleNextStep} disabled={currentStep === meditationSteps.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meditation;
