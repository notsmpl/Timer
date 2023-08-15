import React from "react";
import {showInput} from '../../store/timerStore';
import { Progress } from 'antd';
import {StartButton} from '../../styles/Buttons';
import { styled } from "styled-components";

const Expired = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;

`

const ExpiredNotice = () => {

    const onRestartButton = () => {
        showInput()
    }
    return (
        <Expired>
            <Progress type="circle" size = {400} percent={100} format={() => 'Done' }/>
            <StartButton className = "btn btn-primary btn-lg" onClick={onRestartButton}>Restart</StartButton>
        </Expired>
        

    );
};

export default ExpiredNotice;