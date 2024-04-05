import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      <Link href="/summary01">Summary1</Link>
      <Link href="/summary02">Summary2</Link>
      <Link href="/summary03">Summary3</Link>
      <Link href="/summary04">Summary4</Link>
      <Link href="/summaryMallard">Mallard</Link>
      <Link href="/summaryRuddy">Ruddy</Link>
      <Link href="/summaryBlueBill">Blue-billed</Link>
      </main>
    </>
  );
}
