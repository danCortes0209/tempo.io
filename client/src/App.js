import React from 'react';
import pulse from './assets/pulse.flac';

function App() {
  let pulso = new Audio(pulse);

  return (
    <div className="App">
      <h1>Metronome</h1>
      <input type="range" min="40" max="250" step="1"/>
      <button onClick={play(pulso, 40)}>Play</button>
    </div>
  );
}

function play(beat, value) {
  setInterval(()=>{
    beat.play();
  }, 60000 / value);
}
export default App;