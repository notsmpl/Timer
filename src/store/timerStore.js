import {createEvent, createStore} from 'effector';

const getSeconds = createEvent();
const runTimer = createEvent();
const resetTimer = createEvent();
const showTimer = createEvent();
const showInput = createEvent();
const getPerseconds = createEvent();
const decrementPersent = createEvent();
const resetPersents = createEvent();

const $seconds = createStore(0)
  .on(getSeconds, (state,seconds) => seconds)
  .on(runTimer,(state,data) =>state - 1)
  .reset(resetTimer);



const $timerStatus = createStore(false)
  .on(showTimer, newStatus => !newStatus);

const $inputStatus = createStore(true)
  .on(showInput,newStatus=> !newStatus);

const $persecond = createStore(0)
  .on(getPerseconds,(state,newpersecond)=> newpersecond);

const $persents = createStore(100) 
  .on(decrementPersent,(state, persecond)=> state - persecond)
  .reset(resetPersents);



$seconds.watch((value) => {
    console.log(`seconds: ${value}`)
  });

$timerStatus.watch((value) => {
    console.log(`Timer status: ${value}`)
  });

$inputStatus.watch((value) => {
    console.log(`input status: ${value}`)
  });

  $persents.watch((value) => {
    console.log(`persents: ${value}`)
  });

  $persecond.watch((value) => {
    console.log(`persecond: ${value}`)
  });



export default $seconds;
export {
    $seconds,
    $persents,
    $persecond,
    $inputStatus,
    $timerStatus,
    getSeconds,
    runTimer,
    showTimer,
    showInput,
    resetTimer,
    decrementPersent,
    getPerseconds,
    resetPersents
};

