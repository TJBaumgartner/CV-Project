import './App.css';
import React, { useState } from 'react';
import uniqid from "uniqid";
import PersonalInfo from './components/personal';
import DisplayCV from './components/CV.JS';
function App() {

  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
  });
  const [education, setEducation] = useState([]);
  const [experiennce, setExperience] = useState([]);

  function handleChange(evt) {
    const value = evt.target.value;
    setPersonalDetails({
      ...personalDetails,
      [evt.target.name]: value
    });
  }
  function handlePersonalSubmit(evt){
    console.log(personalDetails);
    evt.preventDefault();
  }
  return (
    <div>
      <PersonalInfo handlePersonalSubmit={handlePersonalSubmit} handleChange={handleChange} personalDetails={personalDetails}></PersonalInfo>
      <DisplayCV personalDetails={personalDetails}></DisplayCV>
    </div>
  );
}

export default App;
