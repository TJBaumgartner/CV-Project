const PersonalInfo = () => {
    return (
        <div className="PersonalInfoForm">
            <label htmlFor="nameInput">
                <input type="text" id="nameInput" placeholder="John Human"></input>
            </label>
            <label htmlFor="titleInput">
                <input type="text" id="titleInput" placeholder="title"></input>
            </label>
            <label htmlFor="numberInput">
                <input type="text" id="numberInput" placeholder="123456789"></input>
            </label>
            <label htmlFor="emailInput">
                <input type="text" id="emailInput" placeholder="email@email.com"></input>
            </label>
            <label htmlFor="locationInput">
                <input type="text" id="locationInput" placeholder="germany"></input>
            </label>
            <label htmlFor="descriptionInput">
                <input type="text" id="descriptionInput" placeholder="some text..."></input>
            </label>
        </div>
    )
}
export default PersonalInfo;
