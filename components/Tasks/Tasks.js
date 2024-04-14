import styles from "./Tasks.module.css"
import { useState } from "react"

const taskList = [
    {
        id: "a",
        task: "Math",
    },
    {
        id: "b",
        task: "Science"
    }
]

export default function Tasks() {
    const [list, setList] = useState(taskList)
    const [name, setName] = useState('')

    function handleChange() {
        //input
        setName(event.target.value);
    }

    function handleAdd() {
        // add
        const Newlist = list.concat({ task });

        setList(Newlist)
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
            <div className={styles.tasks}>
                <div className={styles.addingTasks}>
                    <div className={styles.addingTasksHighlight}></div>
                    <div className={styles.addingTasksInputField}>
                        <input className={styles.inputTask} type="text" placeholder="Add Tasks" />
                        <div>
                            <i class="fa fa-filter fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className={styles.submittingTasks}>
                    <span className={styles.submittingTasksIcon}>
                        <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                    </span>
                </div>
                <div className={styles.taskList}>
                    <h2 className={styles.taskListTitle}>Current <div>Task</div></h2>
                </div>
            </div>

{/* 
            <div>
                <div>
                    <input type="text" onChange={handleChange} />
                    <button type="button" onChange={handleAdd}>Add</button>
                </div>
                <ul>
                    {list.map((item) => (
                        <li style={{ color: "red" }} key={item.id}>{item.task} <button>Complete</button></li>
                    ))}
                </ul>
            </div> */}
        </>
    )
}