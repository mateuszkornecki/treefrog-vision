import {createContext} from "react";
import CONFIG from "@/constants/CONFIG.json";
import {TThemeName} from "@/types/TTheme"

const initialChangeThemeNameToFn = (newThemeName: TThemeName) => {}

const initialContextValue = {
    themeName: "default",
    ...CONFIG, changeThemeNameTo: initialChangeThemeNameToFn
}

const ConfigContext = createContext(initialContextValue);

export default ConfigContext;