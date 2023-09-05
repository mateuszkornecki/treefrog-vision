import React from "react";
import Pointer from "../Pointer";
import useTheme from "../../hooks/useTheme";

function App() {
    const {theme,changeToRandomTheme} = useTheme();


    return (
        <div className="App" style={{backgroundColor: theme.background}}>
            <Pointer
                directionMode={'modeCL'}
                color={theme.pointer}
                paused={false}
                size={'tiny'}
                freezeAndCenter={false}
                onClick={changeToRandomTheme}
            />
        </div>
  );
}
export default  App;