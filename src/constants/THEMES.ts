export const THEMES = {
    default: {
    "pointerColor": "black",
        "backgroundColor": "#f1c421"
},
    bw: {
    "pointerColor": "white",
        "backgroundColor": "black"
}
}

type TThemeName = keyof typeof THEMES
type TTheme = typeof THEMES[TThemeName]

export type {TTheme, TThemeName}