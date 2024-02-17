import {createContext} from "react";
import CONFIG from "@/constants/CONFIG.json";
import {TThemeName} from "@/types/TTheme"
import {TConfig} from "@/types/TConfig"

const initialChangeThemeNameToFn = (newThemeName: TThemeName) => {}


const initialContextValue: TConfig = {
    ...CONFIG,
    themeName:"default",
    changeThemeNameTo: initialChangeThemeNameToFn
}

const ConfigContext = createContext<TConfig>(initialContextValue);

export default ConfigContext;