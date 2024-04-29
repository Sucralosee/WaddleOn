import styles from "./House.module.css";
import React, { useState } from 'react';
import Image from "next/image"

export default function House() {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <>
            <div>
                <button
                    tabIndex={1} className={`${styles.buttonNext}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                    <Image src="/images/house.png" width={50} height={50}/>
                </button>
            </div>
        </>
    );
}