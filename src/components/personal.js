const PersonalInfo = ({handlePersonalChange, personalDetails}) => {
    return (
        <form className="PersonalInfoForm">
            <label>
                Name
                <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={(e)=>handlePersonalChange(e)}
                />
            </label>
            <label>
                Title
                <input
                type="text"
                name="title"
                value={personalDetails.title}
                onChange={(e)=>handlePersonalChange(e)}
                />
            </label>
            <label>
                Phone
                <input
                type="text"
                name="phone"
                value={personalDetails.phone}
                onChange={(e)=>handlePersonalChange(e)}
                />
            </label>
            <label>
                Email
                <input
                type="text"
                name="email"
                value={personalDetails.email}
                onChange={(e)=>handlePersonalChange(e)}
                />
            </label>
            <label>
                Location
                <input
                type="text"
                name="location"
                value={personalDetails.location}
                onChange={(e)=>handlePersonalChange(e)}
                />
            </label>
        </form>
        )
}
export default PersonalInfo;
