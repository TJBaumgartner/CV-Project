const DisplayCV = ({personalDetails}) => {
    return (
        <div>
            <h1>{personalDetails.name}</h1>
            <h2>{personalDetails.title}</h2>
            <p>{personalDetails.phone}</p>
            <p>{personalDetails.email}</p>
            <p>{personalDetails.location}</p>
        </div>
    )
}
export default DisplayCV;
