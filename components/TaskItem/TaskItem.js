import React from "react"
import styles from "./TaskItem.module.css"

export default function TaskItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id)
    }

    return (
        <>
            <div className={styles.listItem}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
                <p>{task.text}</p>
                <button onClick={() => deleteTask(task.id)}>
                    X
                </button>
            </div >
        </>
    )
}