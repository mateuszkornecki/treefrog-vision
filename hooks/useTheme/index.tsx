'use client'

import {useState} from "react";
import themes from "../../public/THEMES.json"

function useThemes() {
    const [theme, setTheme] = useState(themes[0]);
    function changeThemeTo(name: string):void {
        const themeWithGivenName = themes.find(theme => theme.name === name);

        if(themeWithGivenName) {
                setTheme(themeWithGivenName);
    } else {
            throw new Error(`Incorrect theme name :${name}!`);
        }
    }

    function changeToRandomTheme(): void {
        // https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
        const randomTheme = themes[Math.floor(Math.random()*themes.length)];
        setTheme(randomTheme);


    }

    return {theme, setTheme, changeThemeTo, changeToRandomTheme};
}

export default useThemes;