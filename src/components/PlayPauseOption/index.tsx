import PauseCircleOutline from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import React from "react";

type PlayPauseOptionProps = {
    isRunning:boolean,
    onClick: ()=>void
}
function PlayPauseOption({isRunning, onClick}: PlayPauseOptionProps) {
    return isRunning ?
        <PauseCircleOutline
            onClick={onClick}
            fontSize={'large'}
            className={"settingsIcon--black"}
        /> :
        <PlayCircleOutline
            onClick={onClick}
            fontSize={'large'}
            className={"settingsIcon--black"}
        />
}
export default PlayPauseOption;