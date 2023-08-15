import React, {useEffect} from "react";

import { useStore } from "effector-react";
import $seconds, {runTimer,resetTimer,showTimer, $timerStatus, $persecond,decrementPersent, resetPersents} from '../../store/timerStore';
import { StartButton } from "../../styles/Buttons";

import TimeSircle from "../time-sircle";

const Timer = () => {
    
    const seconds = useStore($seconds);
    const timerStatus = useStore($timerStatus);
    const persecond = useStore($persecond);

    useEffect(() => {
        if (timerStatus) {
            const interval = setInterval(() => {
                if(seconds>0){
                    runTimer();
                    decrementPersent(persecond);
                }
                else showTimer()
              }, 1000);
        
        return () => clearInterval(interval);
            
        };
      }, [seconds, timerStatus,persecond]);

      const onRestartTimer = () => {
        resetTimer();
        resetPersents();
      };

    return(
        <div>
            <TimeSircle />
            <StartButton  onClick={onRestartTimer}>
                Stop
            </StartButton>
        </div>
    );
};

export default Timer;







/* useEffect(() => {
    if (isTimerRuning) {
        const interval = setInterval(() => {
            if(seconds>0){
                timerCount((s) => (s - 1));
                //console.log('timer')
            }
            else setIsTimerRuning(false)
            
          }, 1000); */
