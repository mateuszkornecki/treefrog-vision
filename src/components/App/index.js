import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [isOpenSettings,setIsOpenSettings ] = useState(false);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);
    }

    function toggleIsOpenSettings() {
        setIsOpenSettings(!isOpenSettings);
    }

  return (
    <div className="App">
        <Pointer bounce={isBouncing} pause={!isBouncing}/>
            <Settings isOpen={isOpenSettings} onClose={toggleIsOpenSettings}>
                <button onClick={toggleBouncing}>{isBouncing ? "Stop bouncing" : "Start bouncing"}</button>
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