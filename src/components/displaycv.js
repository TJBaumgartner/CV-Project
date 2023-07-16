const DisplayCV = ({personalDetails, educationList, removeEducation, experienceList, removeExperience}) => {
    // console.log(educationList)
    return (
        <div className="DisplayCV">
            <div className="personalGroup">
                <h1>{personalDetails.name}</h1>
                <h2>{personalDetails.title}</h2>
                <p>{personalDetails.phone}</p>
                <p>{personalDetails.email}</p>
                <p>{personalDetails.location}</p>
                <p>{personalDetails.description}</p>
            </div>
            <div className="educationContainer">
                <h1>Education</h1>
                {educationList.map((education) => {
                    return <div key={education.id} className="educationGroup">
                                <div>{education.school}</div> 
                                <div>{education.study}</div> 
                                <div>{education.time}</div>
                                <button onClick={() => removeEducation(education.id)}>Delete Education</button>
                            </div>
                })}
            </div>
            <div className="experienceContainer">
                <h1>Experience</h1>
                {experienceList.map((experience) => {
                    return <div key={experience.id} className="experienceGroup">
                                <div>{experience.company}</div> 
                                <div>{experience.position}</div> 
                                <div>{experience.tasks}</div>
                                <div>{experience.start}</div> 
                                <div>{experience.end}</div>
                                <button onClick={() => removeExperience(experience.id)}>Delete Education</button>
                            </div>
                })}
            </div>
        </div>
    )
}
export default DisplayCV;