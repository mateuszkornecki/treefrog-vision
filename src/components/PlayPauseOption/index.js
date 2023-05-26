import PauseCircleOutline from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";

function PlayPauseOption({isRunning, onClick}) {
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