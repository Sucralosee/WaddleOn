import { useState, useEffect, createRef } from "react"
import styles from "../styles/TimerPage.module.css"
import NavBar from "@/components/Navbar/NavBar"
import Weather from "@/components/Weather/Weather"
import Pomodoro from "@/components/Pomodoro/Pomodoro"
import DucksAnim from "@/components/DucksAnim/DucksAnim"
import SettingsMenu from "@/components/SettingsMenu/SettingsMenu"
import ReactAudioPlayer from 'react-audio-player';

export default function TimerPage() {

    //API Integration: free code camp guide
    const [lat, setLat] = useState([49.104431]);
    const [long, setLong] = useState([-122.801094]);
    const [data, setData] = useState([false]);
    const [isDark, setIsDark] = useState(false)
    const [audio, setAudio] = useState(false)
    const [settings, setSettings] = useState(false)

    var apiKeyInfo = process.env.NEXT_PUBLIC_API_KEY;
    var url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${apiKeyInfo}`

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(url)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long])

    //Theme doesn't work
    useEffect(() => {
        const theme = document.getElementById("theme");

        if (theme) {
            theme.addEventListener("click", function handleTheme() {
                setIsDark(!isDark)
            })
        }
    }, []);

    //settings
    useEffect(() => {
        const settingsIcon = document.querySelector(".fa-cog");

        const handleSettings = () => {
            setSettings(!settings);
        };

        if (settingsIcon) {
            settingsIcon.addEventListener("click", handleSettings);
        }

        return () => {
            if (settingsIcon) {
                settingsIcon.removeEventListener("click", handleSettings);
            }
        };
    }, [settings]);

    const childToParent = (childData) => {
        setSettings(false)
        console.log("test")
    };

    return (
        <>
            <ReactAudioPlayer
                src="/audio/waves.mp3"
                autoPlay
                controls
                loop
                muted={audio}
                style={{ position: "absolute" }}
            />
            <main className={`${styles.main}`} data-theme={isDark ? "dark" : "light"}>
                <div className={styles.phoneContainer}>
                    {settings && <SettingsMenu childParent={childToParent} />}
                    {(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data} />
                    ) : (
                        <p className={styles.loading}>Loading Time & Weather...</p>
                    )}
                    <div className={styles.duckAnimationTimer}>
                        <DucksAnim inlineSizing={{
                            position: "relative",
                            top: "-200px",
                            marginBottom: "-200px",
                            borderRadius: "0 0 8px 8px"
                        }} />
                        <Pomodoro />
                    </div>
                    <NavBar />
                </div>
            </main>
        </>
    )
}