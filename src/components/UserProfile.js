import React, { useState } from 'react';
import '../css/UserProfile.css'; // Import the CSS file

function UserProfile() {
  const initialProfile = {
    name: '',
    age: '',
    healthConditions: '',
    activityPreferences: '',
  };

  const [profile, setProfile] = useState({ ...initialProfile });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClear = () => {
    setProfile({ ...initialProfile });
    setSubmitted(false);
  };

  return (
    <div className='user-profile'>
      <h2>User Profile Setup</h2>
      <label>Name:</label>
      <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
      <label>Age:</label>
      <input type="number" name="age" value={profile.age} onChange={handleInputChange} />
      <label>Health Conditions:</label>
      <input
        type="text"
        name="healthConditions"
        value={profile.healthConditions}
        onChange={handleInputChange}
      />
      <label>Activity Preferences:</label>
      <input
        type="text"
        name="activityPreferences"
        value={profile.activityPreferences}
        onChange={handleInputChange}
      />
      <div>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {submitted && (
        <div className='user-profile-status'>
          <h3>Profile Saved</h3>
          <p>Name: {profile.name}</p>
          <p>Age: {profile.age}</p>
          <p>Health Conditions: {profile.healthConditions}</p>
          <p>Activity Preferences: {profile.activityPreferences}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
