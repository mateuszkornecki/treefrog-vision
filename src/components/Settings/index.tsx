import React from 'react';
import './Settings.css';

function Settings({isOpen, children}) {
    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    // There is a CSS property called "visibility"...
    // @ts-ignore
    return <div className={"settings"} style={settingsStyles}>
        {children}
    </div>
}

export default Settings;