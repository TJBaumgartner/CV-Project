const EducationInfo = ({handleEducationChange, handleEducationSubmit, educationData}) => {
    return (
        <form className="PersonalInfoForm" onSubmit={handleEducationSubmit}>
            <label>
                School
                <input
                type="text"
                name="school"
                value={educationData.school}
                onChange={(e)=>handleEducationChange(e)}
                />
            </label>
            <label>
                Study
                <input
                type="text"
                name="study"
                value={educationData.study}
                onChange={(e)=>handleEducationChange(e)}
                />
            </label>
            <label>
                Time
                <input
                type="text"
                name="time"
                value={educationData.time}
                onChange={(e)=>handleEducationChange(e)}
                />
            </label>
            <button type="submit">Click me</button>
        </form>
        )
}
export default EducationInfo;
