import { useState, useEffect } from 'react';
import styles from "./Landing.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Landing() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div>
                {showLogo &&
                    <div className={styles.landLogo}>
                        <div className={styles.landingLogoContainer}>
                            <Image
                                className={styles.logo}
                                src="/images/WaddleOn.svg"
                                width={215}
                                height={75}
                            />
                            <Link href="/TimerPage" className={`${styles.linkLand} ${styles.pomDesc}`}>Pomodoro Timer</Link>
                            <p>Start your first activity now</p>
                            <Link href="/TimerPage" className={`${styles.linkLand} ${styles.getStart}`}>Continue</Link>
                        </div>
                    </div>
                }
                <div className={styles.videoBackground}>
                    <video autoPlay muted loop className="video" width="1920" height="1080" preload="none">
                        <source src="video/Lake_2.mp4#t=4.5,20" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
}
