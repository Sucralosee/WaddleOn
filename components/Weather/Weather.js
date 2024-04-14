import styles from "./Weather.module.css"
import moment from "moment"

//OpenWeather API Tutorial: https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/

export default function Weather({ weatherData }) {

    // HH/MM Guide:  https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
    const date = new Date;
    const time = `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: 'true' })}`

    return (
        <>
            <div className={styles.weather}>
                <div className={styles.weatherTime}>
                    <h3 className={styles.weatherHeader}>{weatherData.name}</h3>
                    <p className={styles.weatherFigure}>{time}</p>
                    <p className={styles.weatherFigure}>{moment().format('dddd')}</p>
                    <p className={styles.weatherFigure}>{moment().format('LL')}</p>
                </div>
                <div className={styles.weatherTemp}>
                    <p className={styles.weatherFigure}>{weatherData.main.temp} ℃</p>
                    <p className={styles.weatherFigure}>{weatherData.weather[0].description}</p>
                </div>
            </div>
        </>
    )
}