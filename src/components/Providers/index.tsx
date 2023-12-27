"use client"

import {ReactNode, useEffect, useState} from "react"
import THEMES from "@/THEMES.json"
import ThemeContext from "@/context/ThemeContext"
import {TThemeName} from "@/types/TThemeName"

type TProvidersProps = {
    children: ReactNode
}

function Providers({children}: TProvidersProps) {
    const [currentThemeName, setCurrentThemeName] = useState<TThemeName>("default")
    const [currentTheme, setCurrentTheme] = useState(THEMES[currentThemeName])

    function changeThemeTo(newThemeName: TThemeName): void {
        setCurrentThemeName(newThemeName)
        setCurrentTheme(THEMES[newThemeName])
    }

    useEffect(() => {
        changeThemeTo(currentThemeName)
    }, [currentThemeName])

    const appState = {
        currentTheme,
        changeThemeTo: changeThemeTo,
    }

    return (
        <ThemeContext.Provider value={appState}>
            {children}
        </ThemeContext.Provider>
    )
}
export default Providers

export {ThemeContext}