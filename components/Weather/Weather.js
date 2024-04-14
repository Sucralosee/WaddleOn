import styles from "./Weather.module.css"
import moment from "moment"

//OpenWeather API Tutorial: https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/

export default function Weather({ weatherData }) {

    // HH/MM Guide:  https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
    const date = new Date;
    const time = `${date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: 'true'})}`

    return (
        <>
            <div className={styles.weather}>
                <h3>{weatherData.name}</h3>
                <p>{time}</p>
                <p>{weatherData.main.temp} ℃</p>
                <p>{weatherData.weather[0].description}</p>
                <p>{moment().format('dddd')}</p>
                <p>{moment().format('LL')}</p>
            </div>
        </>
    )
}