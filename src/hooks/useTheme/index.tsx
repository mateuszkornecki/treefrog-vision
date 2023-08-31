import {useState} from "react";

const themes = [
    {pointer: "black", background: "#f1c421"},
    {pointer: "hotpink", background: "lightblue"},
    {pointer: "blue", background: "green"},
];

function useThemes() {
    const [theme, setTheme] = useState(themes[0]);

    return {theme, setTheme, themes, changeTheme: setTheme};
}

export default useThemes;