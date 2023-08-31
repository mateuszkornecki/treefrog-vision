import React from "react";
import './App.css';
import Pointer from "../Pointer";
import useTheme from "../../hooks/useTheme";

function App() {
    const {theme} = useTheme();


    return (
        <div className="App" style={{backgroundColor: theme.background}}>
            <Pointer
                directionMode={'modeCL'}
                color={theme.pointer}
                paused={false}
                size={'tiny'}
                freezeAndCenter={false}
            />
        </div>
  );
}
export default  App;