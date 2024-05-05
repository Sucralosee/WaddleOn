import styles from "./TasksonBoard.module.css"
import { useState, useEffect } from "react"
import TaskItem from "@/components/TaskItem/TaskItem"
import Image from "next/image"
import { recommendedTasks } from "@/data/inventory"


//https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
export default function TasksOnBoard({
    number = { cycleNumber },
    coloring
}) {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('')
    const [chips, setChips] = useState(false)
    const [chipStatus, setChipStatus] = useState('none')
    var [data, setData] = useState(recommendedTasks);
    var [taskNotify, setTaskNotify] = useState()
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsDark(() => {
                const saved = localStorage.getItem("isDark");
                const initialValue = JSON.parse(saved);
                return initialValue || "";
            })
        }
    }, [])

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

    //State mngmt
    const notification = () => {
        setTaskNotify(true)
        setTimeout(() => {
            setTaskNotify(false);
        }, 2000);
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
                        pattern="[a-z]+"
                    />
                    <Image src="/images/Add.svg" width={25} height={25} className={styles.taskFilter} tabIndex={2} onClick={() => { addTask(text); notification() }} />
                </div>
                <div className={styles.tasksContainer} style={coloring}>
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