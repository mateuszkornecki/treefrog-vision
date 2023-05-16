import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [shouldRestart,forceRestart] = useState(false)
    const [isOpenSettings,setIsOpenSettings ] = useState(false);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);
    }

    function restartBounding() {
        forceRestart(!shouldRestart)
    }

    function toggleIsOpenSettings() {
        setIsOpenSettings(!isOpenSettings);
    }

  return (
    <div className="App">
        <Pointer bounce={isBouncing} pause={!isBouncing} restart={shouldRestart}/>
            <Settings isOpen={isOpenSettings} onClose={toggleIsOpenSettings}>
                <button onClick={toggleBouncing}>{isBouncing ? "Pause" : "Unpause"}</button>
                <button onClick={restartBounding}>{shouldRestart ? "Start" : "`restart"}</button>
            </Settings>
        <SettingsApplicationsIcon
            fontSize={'large'}
            className={"settingsIcon"}
            onClick={toggleIsOpenSettings}
        />
    </div>
  );
}
export default  App;