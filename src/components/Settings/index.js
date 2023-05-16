import './index.css';

function Settings({isOpen, children, onClose}) {

    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    return <div className={"settings"} style={settingsStyles}>
        {children}
        <button onClick={onClose}>X</button>
    </div>
}

export default Settings;