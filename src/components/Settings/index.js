import './Settings.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function Settings({isOpen, children, onClose}) {

    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    return <div className={"settings"} style={settingsStyles}>
        {children}
        <
            HighlightOffIcon
            fontSize={'medium'}
            className={"settingsIcon--black settingsIcon--close"}
            onClick={onClose}/>
    </div>
}

export default Settings;