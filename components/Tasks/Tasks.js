import styles from "./Tasks.module.css"
import { useState } from "react"
import TaskItem from "../TaskItem/TaskItem"


//https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
export default function Tasks() {
    const [tasks, setTasks] = useState([])

    const [text, setText] = useState('')

    function addTask(text) {
        const newTask = {
            id: Date.now(), // I don't understand this part yet
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <>
            <div className="todo-list">
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => addTask(text)}>Add</button>
            </div>
        </>
    )
}