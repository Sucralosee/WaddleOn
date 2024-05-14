import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import Landed from '@/components/Landed';
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Waddle On</title>
        <meta name="description" content="WaddleOn | Done Onboarding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoDuck.ico" />
      </Head>
      <main className={`${styles.main}`}>
          <div>
            <Landed/>
          </div>
      </main>
    </>
  );
}
