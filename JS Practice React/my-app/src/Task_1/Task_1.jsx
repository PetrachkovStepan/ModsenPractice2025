import { useState } from "react";
import ItemList from "./itemList";
import './../App.css';

function Task_1() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([])
    
    const createItem = async (e) => {
        e.preventDefault()
        const newItem ={
            id: Date.now(),
            text: text,
        }
        setItems([...items ,newItem])
    }
  return (
    <div className="taskContainer">
      <h2>Задание 1: список дел</h2>
      <input className="myInput"
        value={text}
        onChange={e => setText(e.target.value)}></input>
      <button className="myButton" onClick={createItem}>Добавить</button>
      <ItemList items={items}/>
    </div>
  );
}

export default Task_1;
