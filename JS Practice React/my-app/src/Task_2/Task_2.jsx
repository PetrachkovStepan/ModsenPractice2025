import { useEffect, useState } from "react";
import { getImageByURL } from "./imageApi";
import './../App.css';

function Task_2() {
    const [img, setImg] = useState("");
    const getImage = async () => {
        let resp = await getImageByURL()
        setImg(resp)
    }
    useEffect(() => {
        getImage()
      },[]);
  return (
    <div className="taskContainer">
      <h2>Задание 2: вывести собаку</h2>
        <img src = {img} className="dogImage"  alt=""/>
    </div>
  );
}

export default Task_2;
