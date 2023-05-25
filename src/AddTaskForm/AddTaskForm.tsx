import React from 'react';

interface IAddTaskFormProps {
    getValueFromInput: React.ChangeEventHandler<HTMLInputElement>;
    addTaskToList: () => void;
    inputValue: string;
}

const AddTaskForm: React.FC<IAddTaskFormProps> = (props) => {
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.inputValue.trim() !== '') {
            props.addTaskToList();
        }
    };

    return (
        <div className="inputBox">
            <input name="issue" className="input-todo" type="text" placeholder="Enter your issue" onChange={props.getValueFromInput} value={props.inputValue} />
            <button type="button" className="btn btnAdd" onClick={handleButtonClick} disabled={props.inputValue.trim() === ''}>Add</button>
        </div>
    );
};

export default AddTaskForm;