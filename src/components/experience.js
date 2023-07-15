const ExperienceInfo = ({handleExperienceChange, handleExperienceSubmit, experienceData}) => {
    return (
        <form className="ExperienceForm" onSubmit={handleExperienceSubmit}>
            <label>
                Company
                <input
                type="text"
                name="company"
                value={experienceData.company}
                onChange={(e)=>handleExperienceChange(e)}
                />
            </label>
            <label>
                Position
                <input
                type="text"
                name="position"
                value={experienceData.position}
                onChange={(e)=>handleExperienceChange(e)}
                />
            </label>
            <label>
                Tasks
                <input
                type="text"
                name="tasks"
                value={experienceData.tassks}
                onChange={(e)=>handleExperienceChange(e)}
                />
            </label>
            <label>
                Start
                <input
                type="text"
                name="start"
                value={experienceData.start}
                onChange={(e)=>handleExperienceChange(e)}
                />
            </label>
            <label>
                End
                <input
                type="text"
                name="end"
                value={experienceData.end}
                onChange={(e)=>handleExperienceChange(e)}
                />
            </label>
            <button type="submit">Click me</button>
        </form>
        )
}
export default ExperienceInfo;
