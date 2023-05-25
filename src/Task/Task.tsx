import React, {useState} from 'react';

interface IDoToListProps {
    id: string;
    title: string;
    removeTask?: React.MouseEventHandler;
    doneTask?: React.MouseEventHandler;
}

const Task: React.FC<IDoToListProps> = (props) => {
    const [isDone, setIsDone] = useState(false);

    const doneTask = () => {
        setIsDone(true);
    };

    return (
        <div className="todo">
            <span className={`todoTitle ${isDone ? 'crosseLine' : ''}`}>{props.title}</span>
            <div className="btnBlock">
                <button className="btn btnDone" onClick={doneTask}>Done</button>
                <button className="btn btnDelete" onClick={props.removeTask}>Delete</button>
            </div>
        </div>
    );
};

export default Task;