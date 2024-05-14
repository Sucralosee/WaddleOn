import styles from "./Next.module.css";
import React, { useState } from 'react';

export default function Next() {
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
                className={styles.buttonNext} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                    Continue
            </button>
        </div>
    </>
  );
}