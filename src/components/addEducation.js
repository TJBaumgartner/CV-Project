//import { createElement } from "react";

const AddEducationForm = (props) =>{
    const inputData =[{
        id:0,
        input: "School",
        placeholder: "Harvard University"
    }, {
        id:1,
        input: "Degree/Program",
        placeholder: "Computer Science"
    }, {
        id:2,
        input: "educationStart",
        placeholder: "2010"
    }, {
        id:3,
        input: "educationEnd",
        placeholder: "2020"
    }, {
        id:4,
        input: "educationDescription",
        placeholder: "Learned Stuff"
    }];
    const formItems = inputData.map(data =>
        <label key={data.id} htmlFor={data.input}>
            <input type="text" id={data.input} placeholder={data.placeholder}></input>
        </label>
    );
    return <div className="workGroup">{formItems}</div>;
}
export default AddEducationForm;