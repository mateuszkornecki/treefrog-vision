import {useState} from "react";
import './index.css';

function Settings({isOpen, children}) {
    return <div className={"settings"}>
        {children}
    </div>
}

export default Settings;