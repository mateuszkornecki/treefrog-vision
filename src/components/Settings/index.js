import './index.css';

function Settings({isOpen, children, onClose}) {

    const settingsStyles = {
        visibility: isOpen ? "" : "hidden",
    };

    return <div className={"settings"} style={settingsStyles}>
        <button onClick={onClose}>Close modal</button>
        {children}
    </div>
}

export default Settings;