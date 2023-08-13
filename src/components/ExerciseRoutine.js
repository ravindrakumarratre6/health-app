import React, { useState } from "react";
import "../css/ExerciseRoutine.css"
function ExerciseRoutine() {
  const [exerciseLevel, setExerciseLevel] = useState("gentle");
  const [gentleExercises, setGentleExercises] = useState([
    "Gentle Stretches",
    "Chair Yoga",
    "Breathing Exercises",
    "Meditation",
    "Neck Rolls",
    // Add more gentle exercises here
  ]);

  const [moderateExercises, setModerateExercises] = useState([
    "Walking",
    "Swimming",
    "Tai Chi",
    "Cycling",
    "Pilates",
    // Add more moderate exercises here
  ]);

  const exercises =
    exerciseLevel === "gentle" ? gentleExercises : moderateExercises;
    
  const [newExercise, setNewExercise] = useState("");

  const handleAddExercise = () => {
    if (newExercise.trim() !== "") {
      if (exerciseLevel === "gentle") {
        setGentleExercises((prevExercises) => [...prevExercises, newExercise]);
      } else {
        setModerateExercises((prevExercises) => [...prevExercises, newExercise]);
      }
      setNewExercise("");
    }
  };

  return (
    <div className="exercise-routine">
      <h2>Exercise Routine</h2>
      <select
        value={exerciseLevel}
        onChange={(e) => setExerciseLevel(e.target.value)}
      >
        <option value="gentle">Gentle</option>
        <option value="moderate">Moderate</option>
      </select>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add new exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
        />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
}

export default ExerciseRoutine;
