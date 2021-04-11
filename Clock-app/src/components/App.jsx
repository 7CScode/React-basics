import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  let [currenttime, currentTime] = React.useState(time);

  time = setInterval(getTime, 1000);

  function getTime() {
    currentTime((currenttime = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{currenttime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
