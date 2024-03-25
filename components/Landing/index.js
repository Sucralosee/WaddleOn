import styles from "./Landing.module.css"

import Image from "next/image"

export default function Landing () {

    return (
        <>
            <div className={styles.landSpline}>
                <div className={styles.landLogo}>
                    <div>
                        <Image
                            src={'/images/logo.svg'}
                            width={100}
                            height={100}
                        />
                        <h1 class="logoHeader">Waddle<span class="logoHeaderGreen">On</span></h1>
                    </div>
                </div>
                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.80/build/spline-viewer.js"></script>
                <spline-viewer url="https://prod.spline.design/8SejcthzSAQ4gB6O/scene.splinecode" ></spline-viewer>
            </div>
        </>
    )

}