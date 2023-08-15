import React from "react";
import { useStore } from "effector-react";
import { Progress } from 'antd';
import { styled } from "styled-components";
import { $persents } from "../../store/timerStore";

const Space = styled.div`
    padding: 20px;
`


const TimeDisplay = ({minutes,seconds}) => {

    const persent = useStore($persents);
    return (
        <Space>
        <Progress   type="circle" 
                    percent={persent} 
                    format={() => `${minutes}m ${seconds}sec`} 
                    size = {400}
                    />
        </Space>
    );
};

export default TimeDisplay;
