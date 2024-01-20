import {TThemeName} from "@/types/TThemeName"

export type TConfig = {
    iterationTime: string,
    delay: string,
    pointerSize: string,
    themeName: TThemeName,
    changeThemeNameTo: (newThemeName: TThemeName) => void
}

