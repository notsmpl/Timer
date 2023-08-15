import React from 'react';
import { getSeconds ,showTimer, showInput,getPerseconds} from '../../store/timerStore';
import { InputGroup,Input} from '../../styles/InputGroup';
import { StartButton } from '../../styles/Buttons';


const InputNumber = () => {

    
    const onChangeHandler = e => {
        getSeconds(e.target.value)
        getPerseconds(100/e.target.value)
    }; 
    const onStartTimer = (e) => {
        showTimer();
        showInput();
    };
    
    return (
        <InputGroup>
                <Input
                    type="number"
                    placeholder="Write a number" 
                    onChange={onChangeHandler}   
                />
                <StartButton  type="submit" onClick={onStartTimer}>
                    Start
                </StartButton>
        </InputGroup>
    );

}; 

export default InputNumber;