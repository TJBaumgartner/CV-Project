const PersonalInfo = ({handleChange, personalDetails, handlePersonalSubmit}) => {
    return (
        <form className="PersonalInfoForm" onSubmit={handlePersonalSubmit}>
            <label>
                Name
                <input
                type="text"
                name="name"
                value={personalDetails.name}
                onChange={handleChange}
                />
            </label>
            <label>
                Title
                <input
                type="text"
                name="title"
                value={personalDetails.title}
                onChange={handleChange}
                />
            </label>
            <label>
                Phone
                <input
                type="text"
                name="phone"
                value={personalDetails.phone}
                onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input
                type="text"
                name="email"
                value={personalDetails.email}
                onChange={handleChange}
                />
            </label>
            <label>
                Location
                <input
                type="text"
                name="location"
                value={personalDetails.location}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        )
}
export default PersonalInfo;
