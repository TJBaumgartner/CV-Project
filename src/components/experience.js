import React, { useState } from 'react';
import AddForm from './addForm';
const WorkExperience = () => {

    const [components, setComponents] = useState(["sample component"]);

    function addComponent() {
        setComponents([...components, "sample Component"]);
    }

    return (
        <div className="WorkExperienceForm">
            <div>
                {components.map((item, i) => ( <AddForm text={item} key={i}/> ))} 
                <button id="submitButton" onClick={addComponent}>Add</button>
            </div>
        </div>
    )
}
export default WorkExperience;
