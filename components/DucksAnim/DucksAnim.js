import { useState, useEffect, createRef } from "react"
import styles from "./DucksAnim.module.css"
import lottie from "lottie-web"

export default function DucksAnim() {
    let animationContainer = createRef();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            rerender: "svg",
            loop: true,
            autoplay: true,
            path: "/animations/DucksLoop3.json"
        })

        return () => animation.destroy();
    }, [])

    return (
        <>
            <div className={styles.animationContainer} ref={animationContainer} />
        </>
    )
}