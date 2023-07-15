import './App.css';
import React, { useState } from 'react';
import uniqid from "uniqid";
import PersonalInfo from './components/personal';
import DisplayCV from './components/displaycv.js';
import EducationInfo from './components/education';

function App() {

  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    location: '',
  });
  const [experiennceList, setExperience] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [educationData, setEducationData] = useState({
    school: '',
    study: '',
    time: '',
    id: uniqid()
  })

  function handlePersonalChange(evt) {
    const value = evt.target.value;
    setPersonalDetails({
      ...personalDetails,
      [evt.target.name]: value
    });
  }

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
  return (
    <div>
      <PersonalInfo handlePersonalChange={handlePersonalChange} personalDetails={personalDetails}></PersonalInfo>
      <EducationInfo educationData={educationData} handleEducationSubmit={handleEducationSubmit} handleEducationChange={handleEducationChange}></EducationInfo>
      <DisplayCV removeEducation={removeEducation} personalDetails={personalDetails} educationList={educationList}></DisplayCV>
    </div>
  );
}

export default App;
