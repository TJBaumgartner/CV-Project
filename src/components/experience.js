import React from 'react';
const WorkExperience = () => {
    const addForm = () => {
        
    }
    return (
        <div className="WorkExperienceForm">
            <div className="workGroup">
                <label htmlFor="companyInput">
                    <input type="text" id="companyInput" placeholder="Company"></input>
                </label>
                <label htmlFor="positionInput">
                    <input type="text" id="positionInput" placeholder="Position"></input>
                </label>
                <label htmlFor="workStart">
                    <input type="text" id="workStart" placeholder="2000"></input>
                </label>
                <label htmlFor="workEnd">
                    <input type="text" id="workEnd" placeholder="2010"></input>
                </label>
                <label htmlFor="jobDescription">
                    <input type="text" id="jobDescription" placeholder="Did work"></input>
                </label>
            </div>
            <button id="submitButton" onClick={addForm}>Add</button>
        </div>
    )
}
export default WorkExperience;
