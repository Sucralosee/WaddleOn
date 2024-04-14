import styles from "./Weather.module.css"
import moment from "moment"

//OpenWeather API Tutorial: https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/

export default function Weather({ weatherData }) {
    return (
        <>
            <div className={styles.weather}>
                <h3>{weatherData.name}</h3>
                <p>Temprature: {weatherData.main.temp}</p>
                <p>Sunrise: {weatherData.sys.sunrise}</p>
                <p>Sunset: {weatherData.sys.sunset}</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Time: {weatherData.main.time}</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
            </div>
        </>
    )
}