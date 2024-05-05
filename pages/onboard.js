import Head from "next/head";
import styles from "@/styles/onboard.module.css";
import Landing from "@/components/Landing";
import Progress from "@/components/Progress";

export default function Onboard() {
    return (
        <>
            <Head>
                <title>WaddleOn</title>
                <meta name="description" content="Onboarding Process" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logoDuck.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossorigin="anonymous"></link>
            </Head>
            <main>
                <div className={styles.onboardContainer}>
                    <Progress/>
                </div>
            </main>
        </>
    )
}