import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutline from '@mui/icons-material/PauseCircleOutline';

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
                {
                isBouncing ?
                <PauseCircleOutline
                onClick={toggleBouncing}
                fontSize={'large'}
                className={"settingsIcon--black"}
            /> :
                <PlayCircleOutline
                onClick={toggleBouncing}
                fontSize={'large'}
                className={"settingsIcon--black"}
            /> }

                <button onClick={restartBounding}>{shouldRestart ? "Start" : "restart"}</button>
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