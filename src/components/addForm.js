//import { createElement } from "react";

const AddForm = (props) =>{
    const inputData =[{
        id:0,
        input: "companyInput",
        placeholder: "Company"
    }, {
        id:1,
        input: "positionInput",
        placeholder: "Gamer"
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
        placeholder: "Worked Job"
    }]
    const formItems = inputData.map(data =>
        <label key={data.id} htmlFor={data.input}>
            <input type="text" id={data.input} placeholder={data.placeholder}></input>
        </label>
    );
    return <div className="workGroup">{formItems}</div>;
}
export default AddForm;