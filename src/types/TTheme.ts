type TThemeName = "default" | "bw"

type TTheme = {
    name: TThemeName,
    pointerColor:string,
    backgroundColor: string
}

type TThemes = {[k in TThemeName]: TTheme }

export type {TTheme, TThemeName, TThemes}