import {createContext} from "react";
import CONFIG from "@/constants/CONFIG.json";
import {TThemeName} from "@/types/TTheme"

const initialChangeThemeNameToFn = (newThemeName: TThemeName) => {}
const initialThemeName:TThemeName = "default"
const initialContextValue = {
    themeName: initialThemeName as TThemeName,
    ...CONFIG, changeThemeNameTo: initialChangeThemeNameToFn
}

const ConfigContext = createContext(initialContextValue);

export default ConfigContext;