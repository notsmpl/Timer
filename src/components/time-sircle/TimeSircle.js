import React from "react";
import { useStore } from "effector-react";
import TimeDisplay from "../time-display/time-display";
import {$seconds} from '../../store/timerStore';
import { styled } from "styled-components";

const TimeSircleWrapp = styled.div`
    padding: 20px;
    display: flex;
`


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