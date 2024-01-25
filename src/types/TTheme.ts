import {THEMES} from "@/constants/THEMES"

type TThemeName = keyof typeof THEMES
type TTheme = typeof THEMES[TThemeName]
type TThemes = typeof THEMES

export type {TTheme, TThemeName, TThemes}