import {createContext} from "react";
import THEMES from "@/THEMES.json";
type TThemeName = keyof typeof THEMES;


const ThemeNameContext = createContext<TThemeName>('default');

export default ThemeNameContext;
export type {TThemeName}