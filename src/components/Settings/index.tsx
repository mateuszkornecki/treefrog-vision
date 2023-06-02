import React from "react";
import './Settings.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Settings({isOpen, children, onClose}) {

    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    // @ts-ignore visibility is a correct css property,ts is wrong
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