import React from 'react';
import './ThemeSetter.css';
import ThemeInput from "../ThemeInput";

type TTheme = {
    background: string,
    pointer: string
}

type TThemeSetterProps = {
    onThemeChange: (theme: TTheme) => void,
    themes: TTheme[]
}

function ThemeSetter({onThemeChange, themes}: TThemeSetterProps) {
    function getCorrespondingBackground(pointerColor:string) {
        let correspondingBackgroundColor: string | null = null;
        themes.forEach(theme => {
            if (theme.pointer === pointerColor) {
                correspondingBackgroundColor = theme.background;
            }
        })

        return correspondingBackgroundColor || null;
    }
    function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
        onThemeChange({
                pointer:event.target.value,
                background: getCorrespondingBackground(event.target.value)
            });
    }
    return <fieldset  className={"options"}>
        <legend>Theme</legend>
        {themes.map(
            (colorPair,i) => <ThemeInput
                key={colorPair.pointer+colorPair.background}
                theme={colorPair}
                positionNumber={i}
                onThemeChange={handleThemeChange}
            />
        )}
    </fieldset>
    }

export {TTheme};
export default  ThemeSetter;