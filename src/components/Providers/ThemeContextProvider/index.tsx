import {ReactNode, useEffect, useState} from "react";
import {TThemeName} from "@/types/TThemeName";
import THEMES from "@/THEMES.json";
import ThemeContext from "@/context/ThemeContext";

export function ThemeContextProvider({children}: {
    children: ReactNode
}) {
    const [themeName, setThemeName] = useState<TThemeName>("default")
    const [theme, setTheme] = useState(THEMES[themeName])

    function changeThemeTo(newThemeName: TThemeName): void {
        setThemeName(newThemeName)
        setTheme(THEMES[newThemeName])
    }

    useEffect(() => {
        changeThemeTo(themeName)
    }, [themeName])

    const themeState = {
        theme: theme,
        changeThemeTo: changeThemeTo,
    }
    return (
        <ThemeContext.Provider value={themeState}>
            {children}
        </ThemeContext.Provider>
    )
}export default ThemeContextProvider