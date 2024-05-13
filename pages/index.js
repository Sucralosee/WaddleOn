import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import Landing from "@/components/Landing";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Waddle On</title>
        <meta name="description" content="Waddle On the Pomodoro Timer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoDuck.ico" />
      </Head>
      <main className={`${styles.main}`}>
          <div className={styles.homeContent}>
            <Landing/>
          </div>
      </main>
    </>
  );
}
