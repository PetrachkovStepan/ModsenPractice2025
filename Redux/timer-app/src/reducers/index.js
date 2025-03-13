const initialState = {
    time: 0,
    isRunning: false,
  };
  
  const SET_TIME = 'SET_TIME';
  const START_TIMER = 'START_TIMER';
  const STOP_TIMER = 'STOP_TIMER';
  
  export const setTime = (time) => ({ type: SET_TIME, payload: time });
  export const startTimer = () => ({ type: START_TIMER });
  export const stopTimer = () => ({ type: STOP_TIMER });
  
  const timerReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TIME:
        return { ...state, time: action.payload };
      case START_TIMER:
        return { ...state, isRunning: true };
      case STOP_TIMER:
        return { ...state, isRunning: false };
      default:
        return state;
    }
  };
  
  export default timerReducer;