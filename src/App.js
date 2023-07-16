import './App.css';
import React, { useState } from 'react';
import uniqid from "uniqid";
import PersonalInfo from './components/personal';
import DisplayCV from './components/displaycv.js';
import EducationInfo from './components/education';
import ExperienceInfo from './components/experience';

function App() {
  //Personal
  const [personalDetails, setPersonalDetails] = useState({
    name: 'John Doe',
    title: 'Worker',
    phone: '123456789',
    email: 'email@gmail.com',
    location: 'United States',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  });
  
    function handlePersonalChange(evt) {
      const value = evt.target.value;
      setPersonalDetails({
        ...personalDetails,
        [evt.target.name]: value
      });
    }

  //Experience
  const [experienceList, setExperienceList] = useState([]);
  const [experienceData, setExperienceData] = useState({
    company: '',
    position: '',
    tasks: '',
    start: '',
    end: '',
    id: uniqid()
  });

  function handleExperienceSubmit(evt){
    evt.preventDefault();
    setExperienceData({
      company: '',
      position: '',
      tasks: '',
      start: '',
      end: '',
      id: uniqid()
    })
    setExperienceList([...experienceList, experienceData])
  }

  function handleExperienceChange(evt){
    const value = evt.target.value
    setExperienceData({
      ...experienceData,
      [evt.target.name]: value
    })
  }

  function removeExperience(id){
    const filterTask = experienceList.filter(a => a.id !== id);
    setExperienceList(filterTask);
  }

  //Education
  const [educationList, setEducationList] = useState([]);
  const [educationData, setEducationData] = useState({
    school: '',
    study: '',
    time: '',
    id: uniqid()
  })

  function handleEducationSubmit(evt){
    evt.preventDefault();
    setEducationData({
      school: '',
      study: '',
      time: '',
      id: uniqid()
    })
    setEducationList([...educationList, educationData])
    console.log(educationList)
  }

  function handleEducationChange(evt){
    const value = evt.target.value
    setEducationData({
      ...educationData,
      [evt.target.name]: value
    })
  }

  function removeEducation(id){
    const filterTask = educationList.filter(a => a.id !== id);
    setEducationList(filterTask);
  }
  //UI
  return (
    <div className='uiContainer'>
      <div className='formContainer'>
      <PersonalInfo handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}></PersonalInfo>
      <EducationInfo educationData={educationData} handleEducationSubmit={handleEducationSubmit} handleEducationChange={handleEducationChange}></EducationInfo>
      <ExperienceInfo experienceData={experienceData} handleExperienceSubmit={handleExperienceSubmit} handleExperienceChange={handleExperienceChange}></ExperienceInfo>
      </div>
      <div className='cvContainer'>
      <DisplayCV removeEducation={removeEducation} personalDetails={personalDetails} educationList={educationList} experienceList={experienceList} removeExperience={removeExperience}></DisplayCV>
      </div>
    </div>
  );
}

export default App;
