import React from 'react';
import './ThemeSetter.css';
import ThemeInput from "../ThemeInput";

type Theme = {
    background: string,
    pointer: string
}

type ThemeSetterProps = {
    onThemeChange: (theme: Theme) => void,
    themes: Theme[]
}
function ThemeSetter({onThemeChange, themes}: ThemeSetterProps) {
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
export default  ThemeSetter;