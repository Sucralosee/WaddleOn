import React from "react"
import styles from "./TaskItem.module.css"
import { useEffect } from "react";

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
                    className={styles.taskCheckBox}
                />
                <button onClick={() => deleteTask(task.id)} className={styles.deleteButton} tabIndex={5}>
                    X
                </button>
            </div >
        </>
    )
}