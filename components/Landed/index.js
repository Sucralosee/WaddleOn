import { useState, useEffect, createRef } from 'react';
import styles from "./Landed.module.css";
import Link from 'next/link';
import lottie from "lottie-web"

export default function Landed() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    let animationContainer = createRef();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            rerender: "svg",
            loop: false,
            autoplay: true,
            path: "/animations/logo.json"
        })
        return () => animation.destroy();
    }, [])

    return (
        <>
            <div className={styles.landedContainer}>
                <div className={styles.landLogo}>
                        <div className={styles.landingLogoContainer}>
                            <div className={styles.animationContainer} ref={animationContainer} />
                            <Link href="/TimerPage" className={`${styles.linkLand} ${styles.pomDesc}`}>Pomodoro Timer</Link>
                            <Link href="/TimerPage" className={`${styles.linkLand} ${styles.getStart}`}>Get Started</Link>
                            <p>Start your first activity now</p>
                        </div>
                    </div>
            </div>
        </>
    );
}


// import { useEffect, createRef } from "react"
// import styles from "./DucksAnim.module.css"
// import lottie from "lottie-web"

// export default function DucksAnim({
//     inlineSizing = {}
// }) {
//     let animationContainer = createRef();

//     useEffect(() => {
//         const animation = lottie.loadAnimation({
//             container: animationContainer.current,
//             rerender: "svg",
//             loop: true,
//             autoplay: true,
//             path: "/animations/DucksLoop3.json"
//         })

//         return () => animation.destroy();
//     }, [])

//     return (
//         <>
//             <div className={styles.animationContainer} ref={animationContainer} style={inlineSizing} />
//         </>
//     )
// }