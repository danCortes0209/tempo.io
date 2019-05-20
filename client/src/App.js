import React, { useState } from "react";
import pulse from "./assets/pulse.flac";

function App() {
    const pulso = new Audio(pulse);

    const [speed, setSpeed] = useState(40);
    const [playing, setPlaying] = useState(0);
    const [beat, setBeat] = useState();

    const handlePlaying = (golpe, velocidad, tocar) => {
        //sending current data to console
        /* console.log(
            `current speed: ${velocidad}`,
            `is playing: ${tocar ? true : false}`,
            `beat interval id: ${beat}`
        ); */

        //if playing is not true, set it as 1 and start an interval with the new speed
        if (!tocar) {
            setPlaying(1);
            setBeat(setInterval(() => golpe.play(), 60000 / velocidad));
        } else {
            //if playing is true/1, set it as false and clear the interval
            setPlaying(0);
            setBeat(clearInterval(beat));
        }
    };

    const handleChangeSpeed = (currentSpeed, currentlyPlaying) => {
        //sending current data to console
        /* console.log(
            "stopped interval playing",
            `current speed: ${currentSpeed}`,
            `is playing: ${currentlyPlaying ? true : false}`
        ); */

        //if it was playing, send the method as if it wasnt with a new interval and new speed.
        if (currentlyPlaying) {
            //stop current interval
            setBeat(clearInterval(beat));
            handlePlaying(pulso, currentSpeed, 0);
        } else {
            handlePlaying(pulso, currentSpeed, 1);
        }
    };

    return (
        <div className="App">
            <h1>Metronome</h1>
            <p>{`Current Speed: ${speed}bpm`}</p>
            <input
                type="range"
                min="40"
                max="250"
                step="1"
                value={speed}
                onChange={e => {
                    setSpeed(e.target.value);
                    handleChangeSpeed(e.target.value, playing);
                }}
            />
            <button onClick={() => handlePlaying(pulso, speed, playing)}>
                {!playing ? "Play" : "Stop"}
            </button>
        </div>
    );
}
export default App;
