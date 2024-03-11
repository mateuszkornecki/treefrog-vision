import {THEMES} from "@/constants/THEMES"
import {TTheme} from "@/types/TTheme"

export default function ExerciseTheme() {
    // This is a component that should be responsive for changing the theme....


    type TThemeItemProps = {
        theme: TTheme
    }
    function ThemeItem({theme}: TThemeItemProps) {
        return <div className={'themeConfig__item'}>{theme.backgroundColor}</div>
    }


    const themes = Object.values(THEMES)

    return (
        themes.map(theme => <ThemeItem key={theme.name} theme={theme}/>)
    )
}
