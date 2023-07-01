import { useState } from 'react';
import './App.css';
import PersonalInfo from './components/personal';
import './App.css'
import WorkExperience from './components/experience';

function App() {
  return (
    <div className="App">
      <PersonalInfo/>
      <WorkExperience/>
    </div>
  );
}

export default App;
