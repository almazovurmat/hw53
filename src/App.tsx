import React, {useState} from 'react';
import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import './App.css';

function App() {
    const [todolist, setToDoList] = useState<{id:string, title: string; }[]>([
        {id: 'task#1', title: 'Wake up at 5:30'},
        {id: 'task#2', title: 'Do a warm-up'},
        {id: 'task#3', title: 'The Meditation'},
        {id: 'task#4', title: 'Take a shower'},
        {id: 'task#5', title: 'Have breakfast'},
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleGetValueFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddButtonClick = () => {
        const updatedList = [...todolist, {id: `id_${Date.now()}`, title: inputValue }];
        setToDoList(updatedList);
        setInputValue('');
    };

    const handleDeleteTask = (id: string) => {
        const todolistCopy = [...todolist];
        const newToDoList = todolistCopy.filter(issue => issue.id !== id);
        setToDoList(newToDoList);
    };

    return (
        <div className="App">
            <AddTaskForm getValueFromInput={handleGetValueFromInput} addTaskToList={handleAddButtonClick} />
            {
                todolist.map((task) => {
                    return <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        removeTask={() => {
                            handleDeleteTask(task.id)}
                        }
                    />
                })
            }
        </div>
    );
}

export default App;
