import Pointer from "../Pointer";
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
                <button onClick={toggleBouncing}>{isBouncing ? "Stop bouncing" : "Start bouncing"}</button>
            </div>
        </div>
    </div>
  );
}

export default  App;
