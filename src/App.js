import React from "react";
import '../src/components/Timer.css'
import Timer from "./components/Timer";

function App() {
  return (
    <Timer step={1000} timerTime={30} autoStart={true}/>
  );
}

export default App;
