import ReactAudioPlayer from 'react-audio-player';
import { useState, useEffect } from 'react';

export default function Music() {
    const reference = true
    const [audioCheck, setAudioCheck] = useState();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            setAudioCheck(() => {
                const saved = localStorage.getItem("audioBool");
                const initialValue = JSON.parse(saved);
                return initialValue || "";
            })
            console.log('You are on the server')
        }
    }, [])

    return (
        <>
            {
                audioCheck && <ReactAudioPlayer
                    src="/audio/waves.mp3"
                    autoPlay
                    loop
                    volume={0.5}
                    style={{ position: "absolute" }}
                />
            }

        </>
    )
}