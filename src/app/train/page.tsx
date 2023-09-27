'use client'

import Pointer from '@/components/Pointer';
import useTheme from "@/hooks/useTheme";
import {useSearchParams} from "next/navigation";
import './page.css';
function App() {
    const {theme,changeToRandomTheme} = useTheme();
    const searchParams = useSearchParams();
    const exerciseNumber = searchParams.get("exercise");

    if(exerciseNumber === "1_1") {

        return (
            <div className="App">
                <>
                    <Pointer
                        directionMode={'modeCL'}
                        color={theme.pointer}
                        paused={false}
                        onClick={changeToRandomTheme}
                    />
                    <style jsx global>
                        {
                            `
                              .App {
                         
                                background-color: ${theme.background};
                              }
                            `
                        }
                    </style>
                </>
            </div>
        );
    } else {
        return <center>
            <h1>404 Error</h1>
            <h2>Sorry, we can’t seem to find what you’re looking for.</h2>
        </center>
    }
}
export default  App;