import React from "react"
import styles from "./TaskItem.module.css"

export default function TaskItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id)
    }

    return (
        <>
            <div className={styles.listItem}>
                <p className={styles.taskName}>{task.text}</p>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
                <button onClick={() => deleteTask(task.id)}>
                    X
                </button>
            </div >
        </>
    )
}