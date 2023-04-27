import Pointer from "../Pointer/Pointer";
import './App.css';
import {useState} from "react";

function App() {
    const [isBouncing, setIsBouncing] = useState(true);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);
    }


  return (
    <div className="App">
        <div className={"controllers"}>
            <div></div>
      <Pointer bounce={isBouncing} pause={!isBouncing}/>
            <div>
                <button onClick={toggleBouncing}>Toggle bouncing</button> Bouncing: <b>{isBouncing ?"On" : "Off"}</b>
            </div>
        </div>
    </div>
  );
}

export default App;
