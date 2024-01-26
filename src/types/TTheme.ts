type TThemeName = "default" | "bw"

type TTheme = {
    name: TThemeName,
    // TODO TPointerColor
    //TODO TBackgroundColor
    pointerColor:string,
    backgroundColor: string
}

type TThemes = {[k in TThemeName]: TTheme }

export type {TTheme, TThemeName, TThemes}

//TODO Create issue to refactor CONFIGS.JSON in the same way like THEMES.ts
