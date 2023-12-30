import {ReactNode, useEffect, useState} from "react";
import {TThemeName} from "@/types/TThemeName";
import THEMES from "@/THEMES.json";
import ThemeContext from "@/context/ThemeContext";

export function ThemeContextProvider({children}: {
    children: ReactNode
}) {
    const [currentThemeName, setCurrentThemeName] = useState<TThemeName>("default")
    const [currentTheme, setCurrentTheme] = useState(THEMES[currentThemeName])

    function changeThemeTo(newThemeName: TThemeName): void {
        setCurrentThemeName(newThemeName)
        setCurrentTheme(THEMES[newThemeName])
    }

    useEffect(() => {
        changeThemeTo(currentThemeName)
    }, [currentThemeName])

    const themeState = {
        currentTheme,
        changeThemeTo: changeThemeTo,
    }
    return (
        <ThemeContext.Provider value={themeState}>
            {children}
        </ThemeContext.Provider>
    )
}export default ThemeContextProvider