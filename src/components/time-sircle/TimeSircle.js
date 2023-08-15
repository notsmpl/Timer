import React from "react";
import { useStore } from "effector-react";
import TimeDisplay from "../time-display/time-display";
import {$seconds} from '../../store/timerStore';
import { styled } from "styled-components";

const TimeSircleWrapp = styled.div`
    padding: 20px;
    display: flex;
`

//import './svg.css'

const TimeSircle = () => {
const seconds = useStore($seconds);
const minutesString = Math.floor(seconds / 60)
const secondsString = Math.floor(seconds % 60)

    return(
        <TimeSircleWrapp>
            <TimeDisplay minutes={minutesString} seconds={secondsString}/> 
        </TimeSircleWrapp>
    );
};

export default TimeSircle;






/* <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                    <path
                        id="base-timer-path-remaining"
                        stroke-dasharray="283"
                        class="base-timer__path-remaining green"
                        d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                        "
                    ></path>
                </g>
            </svg>
            <div className="base-timer__label">
                <TimeDisplay value={minutesString}/> 
                <p>:</p>
                <TimeDisplay value={secondsString}/>
            </div>
             */