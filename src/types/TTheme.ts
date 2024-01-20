import THEMES from '@/constants/THEMES.json'
import {TThemeName} from "@/types/TThemeName"

export type TTheme = typeof THEMES[TThemeName]