import {useState} from "react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FilterCenterFocus from '@mui/icons-material/FilterCenterFocus';
import tinycolor from "tinycolor2";
import './App.css';
import Pointer from "../Pointer";
import Settings from "../Settings";
import ThemeSetter from "../ThemeSetter";
import PlayPauseOption from "../PlayPauseOption";

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
    function handleThemeChange(newTheme) {
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
    return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
        <Pointer
            color={pointerColor}
            paused={!isBouncing}
            freezeAndCenter={isFrozenAndCentered}
        />
            <Settings
                isOpen={isOpenSettings}
                onClose={toggleIsOpenSettings}
            >
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
                    colorPairs={THEME}
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