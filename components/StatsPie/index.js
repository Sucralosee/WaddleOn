import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState } from 'react';
import styles from "@/components/StatsPie/statsPie.module.css";


ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
);

export default function StatsPie() {
    const [chartData1, setChartData1] = useState({
        labels: ["Mastered", "Approaching Mastery", "Moving Towards Mastery", "Average", "Low"],
        datasets: [
            {
                label: 'Using a Pomodoro Technique',
                data: [8.7, 17.4, 73.9, 0, 0],
                borderWidth: 5,
                borderColor: ['rgba(40,40,40,0.4)', 'rgba(60,60,60,0.4)', 'rgba(80,162,235,0.4)', 'rgba(80,80,80,0.4)', 'rgba(100,100,100,0.4)'],
                backgroundColor: ['rgba(67, 156, 142, 1)', 'rgba(157, 228, 215, 1)', 'rgba(255, 175, 121, 1)', 'rgba(184, 126, 141, 1)', 'rgba(217, 0, 50, 1)'],
            },
        ]
    });

    const [chartData2, setChartData2] = useState({
        labels: ["Mastered", "Approaching Mastery", "Moving Towards Mastery", "Average", "Low"],
        datasets: [
            {
                label: 'Using Standard Lecture Techniques',
                data: [0, 0, 13, 73.9, 13],
                borderWidth: 5,
                borderColor: ['rgba(40,40,40,0.4)', 'rgba(60,60,60,0.4)', 'rgba(80,162,235,0.4)', 'rgba(80,80,80,0.4)', 'rgba(100,100,100,0.4)'],
                backgroundColor: ['rgba(67, 156, 142, 1)', 'rgba(157, 228, 215, 1)', 'rgba(255, 175, 121, 1)', 'rgba(184, 126, 141, 1)', 'rgba(217, 0, 50, 1)'],
            },
        ]
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position: 'right'
            },
            titles: {
                display: true,
                text: "Pomodoro Proof"
            }
        },
        maintainAspectRation: false,
        responsive: false
    });

    return (
        <div className={`${styles.stats} fadeIn`}>
            <h1 className={styles.statsHeadline}>The Effect of Pomodoro Technique</h1>
            <div className={`${styles.lineContainer}`}>
                <div className={styles.line}></div>
            </div>
            <p>The Pomodoro technique is a timed-based strategy used in fighting procrastination and found to increase academic performance. However, its effect on academic learning in a synchronous remote learning modality has yet to be investigated. The study used a mixed triangulation semi-experimental design using a whole sample (N=46), following all ethical equivalence procedures. The genetics concept mastery of the students was tested using a researcher-made test. ANCOVA results revealed that students taught using Pomodoro yielded significantly better concept mastery in genetics than the lecture method. This study contributes to the evaluation of one science teaching strategy compatible with remote learning modality.</p>
            <div className={styles.fadeIn}>
                <div className={styles.pieInfo}>
                <h4>Using Pomodoro Technique</h4>
                <Pie data={chartData1} options={chartOptions} style={{ width: "300px", height: "150px" }} className={styles.pieActual}/>
                <p className={styles.pieDesc}>Notice that all students performed in the Mastered, Approaching Mastery, and the Moving Towards Mastery categories.</p>
                </div>
                <div className={`${styles.lineContainer}`}>
                <div className={styles.line}></div>
                </div>
                <div className={styles.pieInfo}>
                <h4>Using Standard Lecture Techniques</h4>
                <Pie data={chartData2} options={chartOptions} style={{ width: "320px", height: "160px" }} className={styles.pieActual}/>
                <p className={`${styles.pieDesc} ${styles.botPieDes}`}>Notice that all students performed in the Mastered, Approaching Mastery, and the Moving Towards Mastery categories.</p>
                </div>
            </div>
        </div>

    );
}
