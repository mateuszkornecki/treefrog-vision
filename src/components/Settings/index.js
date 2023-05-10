import './index.css';

function Settings({isOpen, children}) {

    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    return <div className={"settings"} style={settingsStyles}>
        {children}
    </div>
}

export default Settings;