import Head from "next/head";
import styles from "@/styles/Home.module.css";
import StatsPie from "@/components/StatsPie";
import Link from "next/link";


export default function pomStats() {
  return (
    <>
      <Head>
        <title>Statistics on Pomodoro Techniques</title>
        <meta name="description" content="WaddleOn | Stats from the Saint Mary's University, Philippines " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoDuck.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.pomContent}>
          <Link className={styles.return} href="/onboard">
            <i class="fa fa-arrow-left" aria-hidden="true" className={styles.arrow}></i>
          </Link>
          <div className={styles.statsContainer}>
            <StatsPie />
          </div>
        </div>
      </main>
    </>
  );
}