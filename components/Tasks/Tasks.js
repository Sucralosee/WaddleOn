import styles from "./Tasks.module.css"


export default function Tasks() {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
            <div className={styles.tasks}>
                <div className={styles.addingTasks}>
                    <div className={styles.addingTasksHighlight}></div>
                    <input className={styles.inputTask} type="text" />
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
        </>
    )
}