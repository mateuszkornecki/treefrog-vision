import {createContext} from "react";
import CONFIGS from "@/CONFIGS.json";
import {TConfigName} from "@/types/TConfigName";

const initialChangeConfigToFn = (newConfigName: TConfigName) => {}

const initialContextValue = {
    currentConfig: CONFIGS['default'],
    changeContextTo: initialChangeConfigToFn
}

const ConfigContext = createContext(initialContextValue);

export default ConfigContext;
