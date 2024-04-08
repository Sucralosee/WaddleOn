import styles from "./Back.module.css";
import React, { useState } from 'react';


export default function Back() {
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
                className={`${styles.buttonNext} ${isPressed ? styles.nextPressed : ''}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                    Back
            </button>
        </div>
    </>
  );
}