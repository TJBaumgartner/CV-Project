import React, { useState } from 'react';
import AddExperienceForm from './addExperience';
const WorkExperience = () => {

    const [components, setComponents] = useState(["sample component"]);

    function addComponent() {
        setComponents([...components, "sample Component"]);
    }

    return (
        <div className="WorkExperienceForm">
            <div>
                {components.map((item, i) => ( <AddExperienceForm text={item} key={i}/> ))} 
                <button id="submitButton" onClick={addComponent}>Add</button>
            </div>
        </div>
    )
}
export default WorkExperience;
