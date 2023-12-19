"use client"

import {createContext, ReactNode, useEffect, useState} from "react";
import THEMES from "@/THEMES.json";

type TProvidersProps = {
    children: ReactNode
}

type TThemeName = keyof typeof THEMES;

const ThemeContext = createContext({currentTheme: THEMES['default'], changeThemeTo: (newThemeName: TThemeName): void => {}})
const Providers =({children}: TProvidersProps) => {

    const [currentThemeName, setCurrentName] = useState<TThemeName>("default");
    const [currentTheme, setCurrentTheme] = useState(THEMES[currentThemeName]);

    function changeThemeTo(newThemeName: TThemeName): void {
        console.log(newThemeName)
        setCurrentTheme(THEMES[newThemeName]);
    }



    useEffect(() => {
        changeThemeTo(currentThemeName);
    }, [currentThemeName]);

    const appState = {
        currentTheme,
        changeThemeTo

    }





    return (
        <ThemeContext.Provider value={appState}>
            {children}
        </ThemeContext.Provider>
    );
}

export default Providers;

export {ThemeContext}