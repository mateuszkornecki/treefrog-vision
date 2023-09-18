'use client'

import Pointer from '@/components/Pointer';
import useTheme from "@/hooks/useTheme";
import {useSearchParams} from "next/navigation";
import './page.css';
function App() {
    const {theme,changeToRandomTheme} = useTheme();


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
        return <p>Oops! incorrect exercise number!</p>
    }
}
export default  App;