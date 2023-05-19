import Pointer from "../Pointer";
import './index.css';
import {useState} from "react";
import Settings from "../Settings";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutline from '@mui/icons-material/PauseCircleOutline';
import FilterCenterFocus from '@mui/icons-material/FilterCenterFocus';

function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [isFrozenAndCentered,freezeAndCenter] = useState(false)
    const [isOpenSettings,setIsOpenSettings ] = useState(false);

    function toggleBouncing() {
        setIsBouncing(!isBouncing);

        if (isFrozenAndCentered) {
            setIsBouncing(true);
            freezeAndCenter(false);
        }
    }

    function stopAndFreezePointer() {
        freezeAndCenter(true);
        setIsBouncing(false);
    }

    function toggleIsOpenSettings() {
        setIsOpenSettings(!isOpenSettings);
    }

  return (
    <div className="App">
        <Pointer bounce={isBouncing} pause={!isBouncing} freezeAndCenter={isFrozenAndCentered}/>
            <Settings isOpen={isOpenSettings} onClose={toggleIsOpenSettings}>
                {
                isBouncing || !isFrozenAndCentered ?
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

                <FilterCenterFocus
                    fontSize={'large'}
                    className={"settingsIcon--black"}
                    onClick={stopAndFreezePointer}
                />
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