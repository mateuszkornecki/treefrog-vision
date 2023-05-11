import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";

function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [isOpenSettings,setIsOpenSettings ] = useState(false);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);
    }

    function closeModal() {
        setIsOpenSettings(false);
    }

  return (
    <div className="App">
        <Pointer bounce={isBouncing} pause={!isBouncing}/>
            <Settings isOpen={isOpenSettings} onClose={closeModal}>
                <button onClick={toggleBouncing}>{isBouncing ? "Stop bouncing" : "Start bouncing"}</button>
            </Settings>
        <button onClick={()=> {
            setIsOpenSettings(!isOpenSettings);}
        } className={"toggleSettingsButton"}>Settings</button>
    </div>
  );
}

export default  App;
