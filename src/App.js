import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/personal';
import './App.css'
import WorkExperience from './components/experience';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <PersonalInfo/>
      <WorkExperience/>
      <Education/>
    </div>
  );
}

export default App;
