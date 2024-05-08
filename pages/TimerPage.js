import { useState, useEffect, createRef } from "react"
import styles from "../styles/TimerPage.module.css"
import NavBar from "@/components/Navbar/NavBar"
import Weather from "@/components/Weather/Weather"
import Pomodoro from "@/components/Pomodoro/Pomodoro"
import DucksAnim from "@/components/DucksAnim/DucksAnim"
import SettingsMenu from "@/components/SettingsMenu/SettingsMenu"
import Music from "@/components/Music/Music"
import useLocalStorage from "use-local-storage"
import Head from "next/head"

export default function TimerPage() {

    //API Integration: free code camp guide
    const [lat, setLat] = useState([49.104431]);
    const [long, setLong] = useState([-122.801094]);

    const [data, setData] = useState([false]);

    const [isDark, setIsDark] = useLocalStorage(false);
    const [theme, setTheme] = useState("");

    const [settings, setSettings] = useState(false);

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
    }, []);

    const childToParent = (childData) => {
        setSettings(false);
        console.log("test");
    };

    //theme

    //fixing the undefined local storage
    //https://stackoverflow.com/questions/74398955/how-to-fix-localstorage-is-not-defined-in-react-js-and-how-to-set-and-get-item-b
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            setTheme(() => {
                const saved = localStorage.getItem("theme");
                const initialValue = JSON.parse(saved);
                return initialValue || "";
            })
            console.log('You are on the server')
        }
    }, [])

    useEffect(() => {
        if (theme === "Light") {
            setIsDark(false);
            console.log("light");
        } else if (theme === "Dark") {
            setIsDark(true);
            console.log("dark");
        }
    })

    return (
        <>
            <Head>
                <title>Timer Page</title>
                <meta name="description" content="Waddle On the Pomodoro Timer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logoDuck.ico" />
            </Head>
              <main className={`${styles.main}`} data-theme={isDark ? "Dark" : "Light"}>
              <Music />
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