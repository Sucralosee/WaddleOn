// import { Pie } from 'react-chartjs-2';
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
        labels: ["Mastered", "Closely Approximating Mastery", "Moving Towards Mastery", "Average", "Low"],
        datasets: [
            {
                label: 'Using Pomodoro',
                data: [8.7, 17.4, 73.9, 0, 0],
                borderColor: ['rgba(40,40,40,0.4)', 'rgba(60,60,60,0.4)', 'rgba(80,162,235,0.4)', 'rgba(80,80,80,0.4)', 'rgba(100,100,100,0.4)'],
                backgroundColor: ['rgba(67, 156, 142, 1)', 'rgba(157, 228, 215, 1)', 'rgba(255, 175, 121, 1)', 'rgba(184, 126, 141, 1)', 'rgba(217, 0, 50, 1)'],
            },
        ]
    });

    const [chartData2, setChartData2] = useState({
        labels: ["Mastered", "Closely Approximating Mastery", "Moving Towards Mastery", "Average", "Low"],
        datasets: [
            {
                label: 'Using Technique X',
                data: [0, 0, 13, 73.9, 13],
                borderColor: ['rgba(40,40,40,0.4)', 'rgba(60,60,60,0.4)', 'rgba(80,162,235,0.4)', 'rgba(80,80,80,0.4)', 'rgba(100,100,100,0.4)'],
                backgroundColor: ['rgba(67, 156, 142, 1)', 'rgba(157, 228, 215, 1)', 'rgba(255, 175, 121, 1)', 'rgba(184, 126, 141, 1)', 'rgba(217, 0, 50, 1)'],
            },
        ]
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position: 'top'
            },
            titles: {
                display: true,
                text: "Daily Revenue"
            }
        },
        maintainAspectRation: false,
        responsive: true
    });

    return (
        <>
            <div className={styles.stats_container}>
                <div className={styles.stats}>
                    <h1>The Effect of Pomodoro Technique</h1>
                    <p >The Pomodoro technique is a timed-based strategy used in fighting procrastination and found to increase academic performance. However, its effect on academic learning in a synchronous remote learning modality has yet to be investigated. The study used a mixed triangulation semi-experimental design using a whole sample (N=46), following all ethical equivalence procedures. The genetics concept mastery of the students was tested using a researcher-made test. ANCOVA results revealed that students taught using Pomodoro yielded significantly better concept mastery in genetics than the lecture method. This study contributes to the evaluation of one science teaching strategy compatible with remote learning modality.</p>
                    <div>
                        <h4>Using Pomodoro Technique</h4>
                        <Pie data={chartData1} options={chartOptions} style={{ width: "300px", height: "200px" }} />
                        <p>Notice that all students performed in the Mastered, Closely Approximating Mastery and the Moving Towards Mastery categories</p>
                        <h4>Using Standard Lecture Techniques</h4>
                        <Pie data={chartData2} options={chartOptions} style={{ width: "300px", height: "200px" }} />
                        <p>Notice that there are no students who performed in the Mastered and Closely Approximating Mastery sections</p>
                    </div>
                </div>
            </div>
        </>
    );
}
