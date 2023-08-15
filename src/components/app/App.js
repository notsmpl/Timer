import React from 'react';
import InputNumber from '../input-number';
import Timer from '../timer';
import ExpiredNotice from '../expired-notice';
import { useStore } from 'effector-react';
import {$timerStatus,$inputStatus} from '../../store/timerStore';
import Theme from '../../styles/Theme';
import Container from '../../styles/Container';


function App() {
const inputStatus = useStore($inputStatus);
const timerStatus = useStore($timerStatus);

  return (
    <Theme>
      <Container>
      {inputStatus && <InputNumber />}
          {timerStatus && <Timer />}
          { !inputStatus && !timerStatus && <ExpiredNotice />}
      </Container>    
    </Theme>
    
  );
};

export default App;








/*   const [seconds, setSeconds] = useState(0);
  const [isTimerRuning, setIsTimerRuning] = useState(false);
  const [isVisibleInput, setIsVisivleInput] = useState(true);

  <InputNumber/>
  seconds = {seconds}
                    setSeconds = {setSeconds}
                    setIsTimerRuning = {setIsTimerRuning}
                    setIsVisivleInput = {setIsVisivleInput}
  <Timer />
   seconds = {seconds}
                                  setSeconds = {setSeconds}
                                  isTimerRuning = {isTimerRuning}
                                  setIsTimerRuning = {setIsTimerRuning}

    <ExpiredNotice />
      setIsVisivleInput = { setIsVisivleInput } 
 */