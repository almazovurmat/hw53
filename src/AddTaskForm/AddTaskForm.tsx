import React from 'react';

interface IAddTaskFormProps {
    getValueFromInput: React.ChangeEventHandler<HTMLInputElement>;
    addTaskToList: React.MouseEventHandler<HTMLButtonElement>;
}


const AddTaskForm:React.FC<IAddTaskFormProps> = (props) => {
    return (
        <div className="inputBox">
            <input name="issue" className="input-todo" type="text" placeholder="Enter your issue" onChange={props.getValueFromInput}/>
            <button type="button" className="btn btnAdd" onClick={props.addTaskToList}>Add</button>
        </div>
    );
};

export default AddTaskForm;