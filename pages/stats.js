import Head from "next/head";
import StatsPie from "@/components/StatsPie";

export default function Stats(){
    return(
        <>
            <Head>
                <title>Stats</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logoDuck.ico" />
            </Head>
            <main>
                <div>
                    <StatsPie/>
                </div>
            </main>
        </>
    )
}