const PersonalInfo = () => {
    return (
        <div className="PersonalInfoForm">
            <label htmlFor="nameInput">
                <input type="text" id="nameInput" placeholder="Name" style={{width: "100%"}}></input>
            </label>
            <label htmlFor="titleInput">
                <input type="text" id="titleInput" placeholder="Title" style={{width: "100%"}}></input>
            </label>
            <label htmlFor="numberInput">
                <input type="text" id="numberInput" placeholder="Phone" style={{width: "100%"}}></input>
            </label>
            <label htmlFor="emailInput">
                <input type="text" id="emailInput" placeholder="Email" style={{width: "100%"}}></input>
            </label>
            <label htmlFor="locationInput">
                <input type="text" id="locationInput" placeholder="Country" style={{width: "100%"}}></input>
            </label>
            <label htmlFor="descriptionInput">
                <textarea type="text" id="descriptionInput" placeholder="Description..." style={{height: "100px",
            width: "100%", resize: "none"}}></textarea>
            </label>
        </div>
    )
}
export default PersonalInfo;
