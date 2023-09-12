'use client'

import React from "react";
import Pointer from "../components/Pointer";
import useTheme from "../hooks/useTheme";

function App() {
  const {theme,changeToRandomTheme} = useTheme();


  return (
      <div className="App" style={{backgroundColor: theme.background}}>
          <>
            <Pointer
                directionMode={'modeCL'}
                color={theme.pointer}
                paused={false}
                size={'tiny'}
                freezeAndCenter={false}
                onClick={changeToRandomTheme}
            />
              <style jsx global>
                  {
                      `
                        body {
                          margin: 0 !important;
                        }

                        .App {
                          text-align: center;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100vh;
                          transition: background 5s ease;
                        }
                      `
                  }
              </style>
          </>
      </div>
  );
}
export default  App;