import { useState } from "react";
import './../App.css';

function Task_3() {
    const [text, setText] = useState("Show");
    const [state, setState] = useState(false);
    const changeState = () =>{
        if(state){
            setText("Show")
        }else{
            setText("Hide")
        }
        setState(!state)
    }
    
  return (
    <div className="taskContainer">
      <h2>Задание 3: состояние кнопки</h2>
      <button className="myButton" onClick={changeState}>
      {text}
      </button>
    </div>
  );
}

export default Task_3;
