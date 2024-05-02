import styles from "./Tasks.module.css"
import { useState } from "react"
import TaskItem from "../TaskItem/TaskItem"
import Image from "next/image"
import { recommendedTasks } from "@/data/inventory"


//https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
export default function Tasks() {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')
    const [chips, setChips] = useState(false)
    const [chipStatus, setChipStatus] = useState('none')
    var [data, setData] = useState();

    //task management
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

    //chip filter
    const addingData = (category) => {
        switch (category) {
            case "All":
                setData(recommendedTasks);
                console.log("All")
                break;
            case "Simple":
                let simple = recommendedTasks.subject.filter(subject => subjects.subject.includes('Simple'));
                console.log("Simple")
                break;
            case "Activities":
                console.log("Actv")
                break;
            case "Homework":
                console.log("Hwk")
                break;
        }
    }

    //Key handler
    const onKeyPressHandler = e => {
        e.preventDefault();
        if (e.key === 'Enter') {
            addTask(text)
        }
    };

    //State mngmt

    return (
        <>
            {chips &&
                <div className={styles.chipContainer}>
                    <div className={styles.chipsMenu}>
                        <h5>Categories</h5>
                        <button onClick={() => addingData("All")}>Simple Tasks</button>
                        <button onClick={() => addingData("Simple")}>Simple Tasks</button>
                        <button onClick={() => addingData("Activities")}>Activities</button>
                        <button onClick={() => addingData("Homework")}>Homework</button>
                        <h5>Add a Premade Task</h5>
                        <div className={styles.chipChoices}>
                            <button onClick={() => addTask("cool")} className={styles.chip}>Cool</button>

                            <button onClick={() => setChips(false)}>Close</button>
                        </div>
                    </div>
                </div>
            }
            <div className={styles.tasks}>

                <div className={styles.taskInput}>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        // onKeyDown={onKeyPressHandler}
                        className={styles.input}
                        placeholder="Write A New Task"
                        tabIndex={1}
                        pattern="[a-z]+"
                    />
                    <Image src="/images/Filter.svg" width={25} height={25} className={styles.taskFilter} tabIndex={2} onClick={() => setChips(true)} />
                </div>
                <button className={styles.tasksAdding} onClick={() => addTask(text)} tabIndex={3}>
                    <Image src="/images/Add.svg" width={30} height={30} />
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