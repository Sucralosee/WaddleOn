import styles from "./Tasks.module.css"
import { useState } from "react"
import TaskItem from "../TaskItem/TaskItem"
import Image from "next/image"


//https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
export default function Tasks() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')

    function addTask(text) {
        const newTask = {
            id: Date.now(), 
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
            <div className={styles.tasks}>
                <div className={styles.taskInput}>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className={styles.input}
                        placeholder="Write A New Task"
                        tabIndex={1}
                    />
                    <Image src="/images/Filter.svg" width={25} height={25} className={styles.taskFilter} tabIndex={2}/>
                </div>
                <button className={styles.tasksAdding} onClick={() => addTask(text)} tabIndex={3}>
                    <Image src="/images/Add.svg" width={30} height={30}/>
                </button>
                <div className={styles.tasksContainer}>
                    <p className={styles.taskListHeader}>Current Tasks:</p>
                    {tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleted={toggleCompleted}
                            tabIndex={4}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}