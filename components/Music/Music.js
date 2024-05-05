import ReactAudioPlayer from 'react-audio-player';
import { useState, useEffect } from 'react';

export default function Music() {
    const [audio, setAudio] = useState();
    const reference = true
    const [audioCheck, setAudioCheck] = useState();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            setAudioCheck(() => {
                const saved = localStorage.getItem("Audio");
                const initialValue = JSON.parse(saved);
                return initialValue || "";
            })
            console.log('You are on the server')
        }
    }, [])

    useEffect(() => {

        if(audioCheck === "On"){
            setAudio(true)
            console.log("audio on")
        } else {
            setAudio(false)
            console.log("audio off")
        }
    })

    return (
        <>
            {
                audio && <ReactAudioPlayer
                    src="/audio/waves.mp3"
                    autoPlay
                    loop
                    volume={0.2}
                    style={{ position: "absolute" }}
                />
            }

        </>
    )
}