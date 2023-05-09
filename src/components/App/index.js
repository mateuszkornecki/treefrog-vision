import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";

function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [isOpenSettings,openSettings ] = useState(false);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);
    }

    function toggleSettings() {
        openSettings(!isOpenSettings);
    }
  return (
    <div className="App">
        <Pointer bounce={isBouncing} pause={!isBouncing}/>
            <Settings isOpen={true}>
                <button onClick={toggleBouncing}>{isBouncing ? "Stop bouncing" : "Start bouncing"}</button>
                {/*<button onClick={toggleSettings}>Settings</button>*/}
            </Settings>
    </div>
  );
}

export default  App;
