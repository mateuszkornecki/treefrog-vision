import React, {useState} from "react";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FilterCenterFocus from '@mui/icons-material/FilterCenterFocus';
import tinycolor from "tinycolor2";
import './App.css';
import Pointer, {TDirectionMode, TPointerSize} from "../Pointer";
import Settings from "../Settings";
import ThemeSetter, {TTheme} from "../ThemeSetter";
import PlayPauseSetting from "../PlayPauseOption";
import PointerSizesetter from "../PointerSizeSetter";
import useThemes from "../../hooks/useThemes";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

function App() {
    const {themes} = useThemes();
    const defaultTheme = themes[0];
    const [isBouncing, setIsBouncing] = useState(true);
    const [isFrozenAndCentered, freezeAndCenter] = useState(false)
    const [isOpenSettings, setIsOpenSettings] = useState(false);
    const [pointerColor, setPointerColor] = useState(() => defaultTheme.pointer);
    const [backgroundColor, setBackgroundColor] = useState(() => defaultTheme.background);
    const [pointerSize, setPointerSize] = useState<TPointerSize>(() => 'regular');
    const [directionMode, setDirectionMode] = useState<TDirectionMode>('modeBoth');

    function handleThemeChange(newTheme: TTheme) {
        setPointerColor(newTheme.pointer);
        setBackgroundColor(newTheme.background);
        document.documentElement.style.setProperty('--pointer-color', newTheme.pointer);

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
        const APP_CLASS_NAME = "App";
        //https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error
        const isClickOutsideModal = (event.target as Element).className === APP_CLASS_NAME;
        if (isOpenSettings && isClickOutsideModal) {
         setIsOpenSettings(false);
        }
    }

    function handleRightModeClick(): void {
        setDirectionMode('modeRight');
    }

    function handleLeftModeClick(): void {
        setDirectionMode('modeLeft');
    }

    function handleBothModeClick(): void {
        setDirectionMode('modeBoth');
    }

    return (
        <div className="App" onClick={handleClick} style={{backgroundColor: backgroundColor}}>
            <Pointer
                directionMode={directionMode}
                color={pointerColor}
                paused={!isBouncing}
                size={pointerSize}
                freezeAndCenter={isFrozenAndCentered}
            />
            <Settings isOpen={isOpenSettings}>
                <fieldset className={"options"}>
                    <legend>Direction</legend>
                    <ArrowCircleLeftIcon
                        className={"settingsIcon--black"}
                        onClick={handleLeftModeClick}
                        fontSize={'large'}
                    />
                    <SwapHorizontalCircleIcon
                        className={"settingsIcon--black"}
                        onClick={handleBothModeClick}
                        fontSize={'large'}
                    />
                    <ArrowCircleRightIcon
                        className={"settingsIcon--black"}
                        onClick={handleRightModeClick}
                        fontSize={'large'}
                    />
                </fieldset>
                <PlayPauseSetting
                    isRunning={isBouncing}
                    onClick={toggleBouncing}
                />
                <FilterCenterFocus
                    fontSize={'large'}
                    className={"settingsIcon--black"}
                    onClick={stopAndFreezePointer}
                />

                <ThemeSetter
                    onThemeChange={handleThemeChange}
                    themes={themes}
                />
                <PointerSizesetter onSizeClick={setPointerSize}/>
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