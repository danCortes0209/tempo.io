import React, { useState } from "react";
import pulse from "./assets/pulse.flac";

function App() {
    const pulso = new Audio(pulse);

    const [speed, setSpeed] = useState(40);
    const [playing, setPlaying] = useState(0);
    const [beat, setBeat] = useState();

    const handlePlaying = (golpe, velocidad, tocar) => {
        console.log(`current speed: ${velocidad}`, `is playing: ${tocar?true:false}`, `beat interval id: ${beat}`);
        
        if (!tocar) {
            setPlaying(1);
            setBeat(setInterval(() => golpe.play(), 60000 / velocidad));
        } else {
            setPlaying(0); 
            setBeat(clearInterval(beat));
        }
    };

    return (
        <div className="App">
            <h1>Metronome</h1>
            <p>Current Speed: {speed}bpm</p>
            <input
                type="range"
                min="40"
                max="250"
                step="1"
                value={speed}
                onChange={e => {
                    setSpeed(e.target.value);
                    handlePlaying(pulso, e.target.value, 1);
                }}
            />
            <button onClick={() => handlePlaying(pulso, speed, playing)}>
                {!playing ? "Play" : "Stop"}
            </button>
        </div>
    );
}
export default App;
