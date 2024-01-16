import {createContext} from "react";
import CONFIG from "@/constants/CONFIG.json";
import {TThemeName} from "@/types/TThemeName"

const initialChangeThemeNameToFn = (newThemeName: TThemeName) => {}
const initialThemeName:TThemeName = "default"
const initialContextValue = {
    ...CONFIG, changeThemeNameTo: initialChangeThemeNameToFn
}

const ConfigContext = createContext(initialContextValue);

export default ConfigContext;