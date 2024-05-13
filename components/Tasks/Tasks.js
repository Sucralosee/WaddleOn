import styles from "./Tasks.module.css"
import { useState, useEffect } from "react"
import TaskItem from "../TaskItem/TaskItem"
import Image from "next/image"
import { recommendedTasks } from "@/data/inventory"
import { appText } from '@/data/inventory/index.js'

//https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
export default function Tasks({
    number = { cycleNumber },
    coloring,
    lang,
    language
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

    //chip filter (code based off of the bookstore assessment)
    const addingData = (category) => {
        switch (category) {
            case "All":
                setData(recommendedTasks);
                console.log("All", recommendedTasks);
                break;
            case "Simple":
                let simple = recommendedTasks.subjects.filter(task => task.category.includes("Simple"));
                setData({ subjects: simple })
                console.log("Simple", simple);
                break;
            case "Activities":
                let activities = recommendedTasks.subjects.filter(task => task.category.includes("Activities"));
                setData({ subjects: activities })
                console.log("Activities", activities);
                break;
            case "Homework":
                let homework = recommendedTasks.subjects.filter(task => task.category.includes("Homework"));
                setData({ subjects: homework })
                console.log("Homework", homework);
                break;
            default:
                console.log("Default");
                break;
        }
    }

    //State mngmt
    const notification = () => {
        setTaskNotify(true)
        setTimeout(() => {
            setTaskNotify(false);
        }, 2000);
    }

    // Get text based on language
    const getAppText = (key) => {
        const language = lang;
        if (appText[language] && appText[language][0][key]) {
            return appText[language][0][key];
        } else {
            console.error(`Text not found for language "${lang}" and key "${key}"`);
            return 'no translation found';
        }
    }

    return (
        <>
            {chips &&
                <div className={styles.chipContainer}>
                    <div className={styles.chipsMenu}>
                        <h5>{getAppText(0)}</h5> 
                        <div className={styles.chipFilterContainer}>
                            <button onClick={() => addingData("All")} className={styles.chipFilter}>{getAppText(1)}</button>
                            <button onClick={() => addingData("Simple")} className={styles.chipFilter}>{getAppText(2)}</button>
                            <button onClick={() => addingData("Activities")} className={styles.chipFilter}>{getAppText(3)}</button>
                            <button onClick={() => addingData("Homework")} className={styles.chipFilter}>{getAppText(4)}</button>
                        </div>
                        <h5>{getAppText(5)}</h5> 
                        <div className={styles.chipChoices}>
                            {data.subjects.map((b, index) => (
                                <button
                                    key={index}
                                    onClick={() => { addTask(b.subject); notification() }}
                                    className={styles.chip}
                                    tabIndex={1}
                                >{b.subject}</button>
                            ))}
                        </div>
                        <button onClick={() => setChips(false)} className={styles.exit}>
                            <h4>
                                X
                            </h4>
                        </button>
                    </div>
                </div>
            }
            {taskNotify &&
                <div className={styles.chipsNotification}>{getAppText(6)}</div> 
            }
            <div className={styles.tasks}>
                <div className={styles.taskInput}>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        className={styles.input}
                        placeholder={getAppText(7)} 
                        tabIndex={1}
                        pattern="[a-z]+"
                    />
                    <Image src="/images/Add.svg" width={25} height={25} className={styles.taskFilter} tabIndex={2} onClick={() => { addTask(text); notification() }} />
                </div>
                <div className={styles.trackerFilter}>
                    <div className={styles.tracker}>{getAppText(8)}: {Math.ceil(number / 2)}</div> 
                    <button className={styles.tasksAdding} onClick={() => setChips(true)} tabIndex={3}>
                        <p className={styles.filterAdd}>{getAppText(9)}</p> 
                    </button>
                </div>

                <div className={styles.tasksContainer} style={coloring}>
                    <p className={styles.taskListHeader}>{getAppText(10)}</p> 
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