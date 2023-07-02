//import { createElement } from "react";

const AddExperienceForm = (props) =>{
    const inputData =[{
        id:0,
        input: "companyInput",
        placeholder: "Company"
    }, {
        id:1,
        input: "positionInput",
        placeholder: "Subway"
    }, {
        id:2,
        input: "workStart",
        placeholder: "2000"
    }, {
        id:3,
        input: "workEnd",
        placeholder: "2010"
    }, {
        id:4,
        input: "jobDescription",
        placeholder: "Made Subs"
    }];
    const formItems = inputData.map(data =>
        <label key={data.id} htmlFor={data.input}>
            <input type="text" id={data.input} placeholder={data.placeholder}></input>
        </label>
    );
    return <div className="workGroup">{formItems}</div>;
}
export default AddExperienceForm;