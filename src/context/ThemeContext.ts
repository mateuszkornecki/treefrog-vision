import {createContext} from "react";
import THEMES from "@/THEMES.json";
import {TThemeName} from "@/types/TThemeName";

const initialChangeThemeToFn = (newThemeName: TThemeName) => {}

const initialContextValue = {
    theme: THEMES['default'],
changeThemeTo: initialChangeThemeToFn
}

const ThemeContext = createContext(initialContextValue);

export default ThemeContext;
