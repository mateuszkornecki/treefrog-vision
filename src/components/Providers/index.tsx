"use client"

import {ReactNode, useEffect, useState} from "react"
import THEMES from "@/THEMES.json"
import ThemeContext from "@/context/ThemeContext"
import {TThemeName} from "@/types/TThemeName"

type TProvidersProps = {
    children: ReactNode
}

const Providers =({children}: TProvidersProps) => {
    const [currentThemeName, setCurrentName] = useState<TThemeName>("default")
    const [currentTheme, setCurrentTheme] = useState(THEMES[currentThemeName])

    function changeThemeTo(newThemeName: TThemeName): void {
        setCurrentName(newThemeName)
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