import {TThemeName} from "@/types/TTheme"

export type TConfig = {
    iterationTime: string,
    delay: string,
    pointerSize: string,
    themeName: TThemeName,
    changeThemeNameTo: (newThemeName: TThemeName) => void
}

