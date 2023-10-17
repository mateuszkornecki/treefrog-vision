import {createContext} from "react";
import CONFIGS from "../CONFIGS.json";

const ConfigContext = createContext(CONFIGS.default);

export default ConfigContext;