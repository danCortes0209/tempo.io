import React, { useState } from "react";
import pulse from "./assets/pulse.flac";

function App() {
    const pulso = new Audio(pulse);

    const [speed, setSpeed] = useState(40);
    const [playing, setPlaying] = useState(0);
    const [beat, setBeat] = useState();

    const handlePlaying = (pulso, speed, playing) => {
        console.log(`current speed: ${speed}`, `is playing: ${playing}`, `beat interval id: ${beat}`);
        
        if (!playing) {
            setPlaying(1);
            setBeat(setInterval(() => pulso.play(), 60000 / speed));
        } else {
            setPlaying(0); 
            setBeat(clearInterval(beat));
        }
    };

    return (
        <div className="App">
            <h1>Metronome</h1>
            <input
                type="range"
                min="40"
                max="250"
                step="1"
                onChange={e => setSpeed(e.target.value)}
            />
            <button onClick={() => handlePlaying(pulso, speed, playing)}>
                {!playing ? "Play" : "Stop"}
            </button>
        </div>
    );
}
export default App;
