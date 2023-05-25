import React from 'react';

interface IDoToListProps
{
    id: string;
    title: string;
    removeTask?: React.MouseEventHandler;
}

const Task: React.FC<IDoToListProps> = (props) => {

    return (
        <div className="todo">
            <span>{props.title}</span>
            <span onClick={props.removeTask}>Delete</span>
        </div>
    );
};

export default Task;