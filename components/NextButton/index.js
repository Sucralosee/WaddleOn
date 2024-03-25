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
                className={styles.buttonNext}
                onMoueDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
                    Next
            </button>
        </div>
    </>
  );
}