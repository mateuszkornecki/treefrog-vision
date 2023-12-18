import THEMES from "@/THEMES.json";
import {useState} from "react";

function useTheme() {
    type TThemeNames = keyof typeof THEMES;
    const [currentThemeName, setCurrentThemeName] = useState<TThemeNames>('default');
    const currentTheme = THEMES[currentThemeName];
    function changeThemeTo(themeName: TThemeNames):void {
        setCurrentThemeName(themeName);
    }
    return {currentTheme, changeThemeTo};
};

export default useTheme;