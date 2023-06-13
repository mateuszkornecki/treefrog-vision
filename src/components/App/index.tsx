import React, {useState} from "react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FilterCenterFocus from '@mui/icons-material/FilterCenterFocus';
import tinycolor from "tinycolor2";
import './App.css';
import Pointer from "../Pointer";
import Settings from "../Settings";
import ThemeSetter from "../ThemeSetter";
import PlayPauseOption from "../PlayPauseOption";
import {Theme} from "../ThemeSetter";

const THEME = [
    {pointer: "red", background: "black"},
    {pointer: "hotpink", background: "lightblue"},
    {pointer: "blue", background: "green"},
];
function App() {
    const [isBouncing, setIsBouncing] = useState(true);
    const [isFrozenAndCentered,freezeAndCenter] = useState(false)
    const [isOpenSettings,setIsOpenSettings ] = useState(false);
    const [pointerColor, setPointerColor] = useState(()=>THEME[0].pointer);
    const [backgroundColor, setBackgroundColor] = useState(()=>THEME[0].background);
    function handleThemeChange(newTheme: Theme ) {
        setPointerColor(newTheme.pointer);
        setBackgroundColor(newTheme.background);
    }

    const isBackgroundDark = tinycolor(backgroundColor).isDark();
const settingsIconStyles = {
    color: isBackgroundDark ? "white" : "black",
};
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
    function handleClick(event: React.MouseEvent<HTMLElement>):void {
        const SETTINGS_MODAL_CLASS_NAME = "settings";
        //https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
        const isClickOutsideModal = (event.target as Element).className !== SETTINGS_MODAL_CLASS_NAME;
        if (isOpenSettings && isClickOutsideModal) {
         setIsOpenSettings(false);
        }
    }
    return (
    <div className="App" onClick={handleClick} style={{backgroundColor: backgroundColor}}>
        <Pointer
            color={pointerColor}
            paused={!isBouncing}
            freezeAndCenter={isFrozenAndCentered}
        />
            <Settings isOpen={isOpenSettings}>
              <PlayPauseOption
                  isRunning={isBouncing}
                  onClick={toggleBouncing}
              />
                <FilterCenterFocus
                    fontSize={'large'}
                    className={"settingsIcon--black"}
                    onClick={stopAndFreezePointer}
                />
                <br/>
                <ThemeSetter
                    onThemeChange={handleThemeChange}
                    themes={THEME}
                />
            </Settings>
        <SettingsApplicationsIcon
            fontSize={'large'}
            className={"settingsIcon"}
            style={settingsIconStyles}
            onClick={toggleIsOpenSettings}
        />
    </div>
  );
}
export default  App;