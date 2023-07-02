import React, { useState } from 'react';
import AddEducationForm from './addEducation';
const Education = () => {

    const [components, setComponents] = useState(["sample component"]);

    function addComponent() {
        setComponents([...components, "sample Component"]);
    }

    return (
        <div className="EducationForm">
            <div>
                {components.map((item, i) => ( <AddEducationForm text={item} key={i}/> ))} 
                <button id="submitButton" onClick={addComponent}>Add</button>
            </div>
        </div>
    )
}
export default Education;
