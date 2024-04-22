import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Landing from "@/components/Landing";
import StatsPie from "@/components/StatsPie";


export default function pomStats() {
  return (
    <>
      <Head>
        <title>Pomodoro stats</title>
        <meta name="description" content="Stats from the Saint Mary's University, Philippines " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
          <div>
            <StatsPie/>
          </div>
      </main>
    </>
  );
}