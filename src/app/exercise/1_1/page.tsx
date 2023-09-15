'use client'

import Pointer from '@/components/Pointer';
import useTheme from "@/hooks/useTheme";

function App() {
    const {theme,changeToRandomTheme} = useTheme();


    return (
        <div className="App">
            <>
                <Pointer
                    directionMode={'modeCL'}
                    color={theme.pointer}
                    paused={true}
                    onClick={changeToRandomTheme}
                />
                <style jsx global>
                    {
                        `
                        .App {
                          text-align: center;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100vh;
                          transition: background 5s ease;
                          background-color: ${theme.background};
                        }
                      `
                    }
                </style>
            </>
        </div>
    );
}
export default  App;