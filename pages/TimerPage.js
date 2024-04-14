import { useState, useEffect } from "react"
import styles from "../styles/TimerPage.module.css"
import Timer from "@/components/Timer/Timer"
import NavBar from "@/components/Navbar/NavBar"
import Image from "next/image"
import Tasks from "@/components/Tasks/Tasks"
import Weather from "@/components/Weather/Weather"


export default function TimerPage() {
    const timerDuck = { backgroundColor: "grey", margin: "0 auto" }

    //API Integration
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

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


    return (
        <>
            <main className={`${styles.main}`}>
                <div className={styles.phoneContainer}>
                    {(typeof data.main != 'undefined') ? (
                        <Weather weatherData={data} />
                    ) : (
                        <p className={styles.loading}>Loading Time & Weather...</p>
                    )}
                    <div className={styles.duckAnimationTimer}>

                        <Image width={430} height={238} style={timerDuck} />
                        <Timer />
                    </div>
                    <div>
                        <Tasks />
                    </div>
                    <NavBar />
                </div>
            </main>
        </>
    )
}