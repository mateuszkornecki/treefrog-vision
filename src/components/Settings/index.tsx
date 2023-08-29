import React, {ReactNode} from 'react';
import './Settings.css';

type SettingsProps = {
    isOpen: boolean,
    children?: ReactNode,
}

function Settings({isOpen, children}: SettingsProps) {
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