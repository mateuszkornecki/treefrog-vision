import React from 'react';
import './ThemeSetter.css';
import ThemeInput from "../ThemeInput";

type Theme = {
    background: string,
    pointer: string
}
type ThemeSetterProps = {
    themes: Theme[]
    onThemeChange: (theme: Theme)=> void
}
function ThemeSetter({onThemeChange, themes}:ThemeSetterProps):React.JSX.Element {
    function getCorrespondingBackground(pointerColor:string) {
        let correspondingBackgroundColor: string | null = null;
        themes.forEach(pair => {
            if (pair.pointer === pointerColor) {
                correspondingBackgroundColor = pair.background;
            }
        })

        return correspondingBackgroundColor || null;
    }
    function handleThemeChange(e) {
        onThemeChange({
                pointer:e.target.value,
                background: getCorrespondingBackground(e.target.value)
            });
    }
    return <fieldset  className={"options"}>
        <legend>Theme</legend>
        {colorPairs.map(
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