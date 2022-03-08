import React, {useState} from "react";
import './Day-Night.css'

const Day = () => {
    const [isDay, setDay] = useState(true)

    const Day = () => setDay(!isDay)
    return(
        <div className={isDay ? "dayItem day" : "dayItem night"}>
            <h1>It is {isDay ? "Day  ☀️" : "Night  🌑"}</h1>
            <button onClick={Day}>Change to: {isDay ? "Night" : "Day"}</button>
        </div>
    )
}

export default Day