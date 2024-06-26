import { useState, useEffect } from 'react';
import styles from "./Landing.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Landing() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleScreenClick = () => {
        setShowLogo(!showLogo);
    };

    return (
        <div onClick={handleScreenClick}>
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
                        <Link href="/onboard" className={`${styles.linkLand} ${styles.getStart}`}>Get Started</Link>
                        <Link href="/TimerPage" className={`${styles.linkLand} ${styles.getOut}`}>Skip Tutorial</Link>
                    </div>
                </div>
            }
            <div className={styles.videoBackground}>
                <video autoPlay muted loop className="video" width="1920" height="1080" preload="none">
                    <source src="video/Lake_2_1.mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
