import React, {useState, useEffect, useRef} from "react";


function Timer({step, timerTime, autoStart}){
    let allLineWidth = 100
    let [lineWidth, setLineWidth]=useState(allLineWidth)
    const [time, setTime]=useState(timerTime)
    const [running, setRunning]=useState(autoStart)

    function formatTime(sec){
        return `${("0"+Math.floor(sec/60)).slice(-2)} : ${("0"+sec%60).slice(-2)}`
    }
    let onePercent=lineWidth/time

    useEffect(()=>{
        let interval;
        if(running && time > 0 ){
            setLineWidth(lineWidth - onePercent)
            interval=setInterval(()=>{
                setTime((prev)=>{
                    return prev-1
                })
            }, step)
        } else if(time === 0){
            setRunning(false)
        }
        else {
            clearInterval(interval)
        }
        return()=> clearInterval(interval)
    }, [running, time, step])

    function handleStatus(){
        setRunning(!running)
    }

    function resetTime(){
        setTime(timerTime)
        setLineWidth(allLineWidth)
    }

    return (
        <div className="wrapper">
            <h2 className="timer">{formatTime(time)} </h2>
            <div className="btns">
                <button onClick={handleStatus}>{running ? "Pause" : "Start"}</button>
                <button onClick={resetTime}>Reset</button>
            </div>
            <div className="wrapper-timeLine">
                <div className="timeLine" style={{width:lineWidth+"%"}}></div>
            </div>
        </div>
    )

}

export default Timer
